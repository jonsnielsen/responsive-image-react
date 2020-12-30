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
import { useImageLoad } from '../utils';
import { isVideoSource } from './videoUtils';

export type VideoProps = VideoBaseProps & {
  sources: VideoSource[];
};

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
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
    }: VideoProps,
    forwardedRef
  ) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    function onVideoLoad() {
      console.log('onVideoLoadCalled');
      setIsVideoLoaded(true);
      if (onLoad) {
        onLoad();
      }
    }

    useEffect(() => {
      if (autoPlay || isBackgroundVideo) {
        videoRef?.current?.play();
      }
    }, []);

    const containerClassNameLayout =
      (layout === 'fill' && commonStyles.containerFill) ||
      (layout === 'responsive' && commonStyles.containerResponsive) ||
      '';
    const containerClassName = `${commonStyles.containerBase} ${containerClassNameLayout}`;
    const containerInlineStyles: CSSProperties =
      (layout === 'responsive' && {
        paddingBottom: `${(height! / width!) * 100}%`,
      }) ||
      {};

    return (
      <div style={containerInlineStyles} className={containerClassName}>
        <PlaceHolderContext.Provider value={{ isImageLoaded: isVideoLoaded }}>
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
