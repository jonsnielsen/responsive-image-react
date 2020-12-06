import React, { createRef, useEffect, useState } from 'react';
import PlaceHolderContext from '../placeholder/PlaceholderContext';
import styles from './vimeo.module.css';
import { MediaBaseProps } from '../types';
// import styles from './vimeo.module.scss';
import { useImageLoad } from '../utils';
import Video from '@vimeo/player';

export type VideoProps = MediaBaseProps & {
  videoId: string;
  // aspectRatio: number;
  onLoad?(): void;
};

const Vimeo = ({
  layout,
  width,
  height,
  videoId,
  placeholder,
  onLoad,
}: VideoProps) => {
  // const { imgRef } = useImageLoad({ onLoad: onI });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const iframeRef = createRef<HTMLIFrameElement>();
  // const vimeoRef = createRef<any>();

  // useEffect(() => {
  //   const playerOptions = {
  //     url: `https://vimeo.com/${videoId}`,
  //     // width: 800,
  //   };

  //   var videoPlayer = new Video(vimeoRef.current!, playerOptions);

  //   videoPlayer.on('play', function() {
  //     console.log('Played the video');
  //   });
  // }, []);

  // function onIframeLoad(ev: any) {
  //   console.log('iframe loaded');

  //   console.log('inside: ', iframeRef.current);
  //   if (iframeRef.current) {
  //     const new_style_element = document.createElement('style');
  //     new_style_element.textContent = 'div { background: red; }';
  //     console.log(iframeRef.current.contentDocument);
  //     if (iframeRef.current.contentDocument) {
  //       console.log('we gotit');
  //       iframeRef.current.contentDocument?.head.appendChild(new_style_element);
  //     }
  //   }
  //   console.log(ev.target);
  //   // setIsImageLoaded(true);
  //   // if (onLoad) {
  //   //   onLoad();
  //   // }
  // }
  // console.log({ style });
  const wrapperStyle = layout === 'fill' ? styles.wrapperFill : styles.test;
  // const wrapperStyle = styles.test;

  return (
    <div className={wrapperStyle}>
      <div>
        <iframe
          // onLoad={onIframeLoad}
          ref={iframeRef}
          width="100%"
          height="100%"
          className={styles.iframe}
          src={`https://player.vimeo.com/video/${videoId}?t&background=1`}
        />
      </div>
    </div>
  );

  // return (
  //   <video
  //     preload="none"
  //     tabIndex={-1}
  //     style={{}}
  //     src="https://player.vimeo.com/0c4f4f44-c8bd-4a3b-933d-feed89df13e5"
  //   ></video>
  //   // <div className={wrapperStyle}>
  //   <div
  //     ref={vimeoRef}
  //     data-vimeo-width="100%"
  //     data-vimeo-height="100%"
  //   ></div>
  // </div>
  // );
};

export default Vimeo;
