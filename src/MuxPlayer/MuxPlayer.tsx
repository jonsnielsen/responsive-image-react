// https://stream.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc
import React, { useRef, useEffect, useState } from 'react';
import PlaceHolderContext from '../placeholder/PlaceholderContext';
import styles from './vimeo.module.css';
import { VideoBaseProps } from '../types';
import Hls from 'hls.js';
// import styles from './vimeo.module.scss';
import { useImageLoad } from '../utils';
import { Video } from '../Video';

export type VideoProps = VideoBaseProps & {
  playbackId: string;
  onLoad?(): void;
};

const Vimeo = ({
  playbackId,
  layout,
  width,
  height,
  isBackgroundVideo,
  placeholder,
  onLoad,
  loop,
  autoPlay,
  playsInline,
  ...nativeVideoProps
}: VideoProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hls] = useState(() => new Hls());
  const videoRef = useRef<HTMLVideoElement>(null);
  // const wrapperStyle = layout === 'fill' ? styles.wrapperFill : styles.test;

  // hls.loadSource(
  //   'https://stream.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc.m3u8'
  //   // GET https://image.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc/animated.gif?start=5
  // );

  function attemptPlay() {
    videoRef.current
      ?.play()
      .catch(err => console.log('error attempting to play: ', err));
  }
  hls.loadSource(
    `https://stream.mux.com/${playbackId}.m3u8`
    // GET https://image.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc/animated.gif?start=5
  );

  useEffect(() => {
    if (videoRef.current) {
      hls.attachMedia(videoRef.current);
    }
    if (autoPlay) {
      attemptPlay();
    }
  }, []);

  return (
    <Video
      {...nativeVideoProps}
      ref={videoRef}
      layout={layout}
      sources={[]}
      autoPlay={false} // autoPlay should be false as we want to control it from MuxPlayer
      height={height!} // use the bang, otherwise TS complains because of the layout prop
      width={width!}
      isBackgroundVideo={isBackgroundVideo}
    />
  );
};

export default Vimeo;
