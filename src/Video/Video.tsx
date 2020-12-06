// https://stream.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc
import React, {
  createRef,
  useEffect,
  useState,
  CSSProperties,
  forwardRef,
  useRef,
} from 'react';
import { VideoSource } from './videoTypes';
import PlaceHolderContext from '../placeholder/PlaceholderContext';
import styles from './video.module.css';
import { VideoBaseProps } from '../types';
import { useImageLoad } from '../utils';
import { isVideoSource } from './videoUtils';

export type VideoProps = VideoBaseProps & {
  sources: VideoSource[];
};

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      layout,
      width,
      height,
      placeholder,
      onLoad,
      muted,
      isBackgroundVideo,
      sources,
      autoPlay,
      loop,
      playsInline,
      controls,
      ...nativeVideoProps
    }: VideoProps,
    forwardedRef
  ) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    console.log({ forwardedRef });

    useEffect(() => {
      if (autoPlay) {
        videoRef?.current?.play();
      }
    }, []);

    const containerClassNameLayout =
      (layout === 'fill' && styles.containerFill) ||
      (layout === 'responsive' && styles.containerResponsive) ||
      '';
    const containerClassName = `${styles.containerBase} ${containerClassNameLayout}`;
    const containerInlineStyles: CSSProperties =
      (layout === 'responsive' && {
        paddingBottom: `${(width! / height!) * 100}%`,
      }) ||
      {};

    return (
      <div style={containerInlineStyles} className={containerClassName}>
        <video
          {...nativeVideoProps}
          className={styles.video}
          ref={forwardedRef || videoRef}
          muted={isBackgroundVideo ? true : muted}
          loop={isBackgroundVideo ? true : loop}
          playsInline={isBackgroundVideo ? false : playsInline}
          controls={isBackgroundVideo ? false : controls}
        >
          {sources.map(source =>
            isVideoSource(source) ? (
              <source key={source.type} src={source.src} type={source.type} />
            ) : (
              source
            )
          )}
        </video>
      </div>
    );
  }
);

export default Video;
