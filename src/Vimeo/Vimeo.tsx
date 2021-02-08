import React, { createRef, useEffect, useState, CSSProperties } from 'react';
import PlaceHolderContext from '../placeholder/PlaceholderContext';
import styles from './vimeo.module.css';
import { MediaBaseProps, VideoBaseProps } from '../types';

export type VimeoProps = VideoBaseProps & {
  playsInline?: never;
  videoId: string;
  layout: 'fixed' | 'responsive';
  onLoad?(): void;
};

/**
 * Vimeo themselves start with an LQIP that then fades into the video.
 * This means that you probably want to use lqip placeholder as well, as using higher resolution image as placeholder,
 * would result a flicker to lqip again
 */
export const Vimeo = ({
  style,
  className,
  layout,
  aspectWidth,
  aspectHeight,
  videoId,
  placeholder,
  onLoad,
  isBackgroundVideo,
  muted,
  autoPlay,
  loop,
  controls,
}: VimeoProps) => {
  const iframeRef = createRef<HTMLIFrameElement>();

  function onIframeLoad() {
    if (onLoad) {
      onLoad();
    }
  }

  const containerInlineStyles: CSSProperties =
    (layout === 'responsive' && {
      paddingBottom: `${(aspectHeight! / aspectWidth!) * 100}%`,
    }) ||
    {};

  const parameters = isBackgroundVideo
    ? `background=1`
    : `autoplay=${+!!autoPlay}&loop=${+!!loop}&muted=${+!!muted}&controls=${+!!controls}`;

  return (
    <div
      style={{ ...containerInlineStyles, ...style }}
      className={`${styles.containerBase} ${className}`}
    >
      <PlaceHolderContext.Provider value={{ isLoaded: false }}>
        {placeholder}
      </PlaceHolderContext.Provider>
      <iframe
        className={styles.vimeo}
        onLoad={onIframeLoad}
        ref={iframeRef}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        src={`https://player.vimeo.com/video/${videoId}?title=0&${parameters}`}
      />
    </div>
  );
};

{
  /* <iframe
  src="https://player.vimeo.com/video/238321573?autoplay=1&loop=1&title=0&byline=0&portrait=0"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>; */
}
