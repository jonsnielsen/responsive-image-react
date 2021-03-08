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
import videoStyles from './video.module.css';
import commonStyles from '../styles.module.css';
import { VideoBaseProps } from '../types';
import { isVideoSource } from './videoUtils';

// The cache will be cleared on a page refresh, but should work during the browser session
const cache = new Set<string>();

export type VideoProps = VideoBaseProps & {
  playsInline?: boolean;
  sources: VideoSource[];
};

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      className,
      style,
      layout,
      aspectWidth,
      aspectHeight,
      placeholder,
      sources,
      onLoad,
      isBackgroundVideo,
      muted,
      autoPlay,
      loop,
      playsInline,
      controls,
      disableRemotePlayback,
    }: VideoProps,
    forwardedRef
  ) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    function onVideoLoad() {
      setIsVideoLoaded(true);
      // cache.add(src);
      if (onLoad) {
        onLoad();
      }
    }

    useEffect(() => {
      if (autoPlay || (typeof autoPlay === 'undefined' && isBackgroundVideo)) {
        videoRef?.current?.play();
      }
    }, [autoPlay, isBackgroundVideo]);

    const containerClassNameLayout =
      (layout === 'fill' && commonStyles.containerFill) ||
      (layout === 'responsive' && commonStyles.containerResponsive) ||
      '';
    const containerClassName = `${commonStyles.containerBase} ${containerClassNameLayout}`;
    const containerInlineStyles: CSSProperties =
      (layout === 'responsive' && {
        paddingBottom: `${(aspectWidth! / aspectHeight!) * 100}%`,
      }) ||
      {};

    return (
      <div
        style={{ ...containerInlineStyles, ...style }}
        className={`${containerClassName} ${className}`}
      >
        <PlaceHolderContext.Provider value={{ isLoaded: isVideoLoaded }}>
          {placeholder}
        </PlaceHolderContext.Provider>
        <video
          className={videoStyles.video}
          ref={forwardedRef || videoRef}
          muted={isBackgroundVideo ? true : muted}
          loop={isBackgroundVideo ? true : loop}
          playsInline={isBackgroundVideo ? false : playsInline}
          controls={isBackgroundVideo ? false : controls}
          onLoadedData={onVideoLoad} // Fired when the first frame of the video is loaded
          disableRemotePlayback={
            isBackgroundVideo ? true : disableRemotePlayback
          }
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
