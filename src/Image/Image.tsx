import React, { ReactElement, useState, CSSProperties } from 'react';
import PlaceHolderContext from '../placeholder/PlaceholderContext';
import { MediaBaseProps, Source } from '../types';
import { useImageLoad } from '../hooks';
import styles from '../styles.module.css';

export type ImageProps = MediaBaseProps & {
  alt: string;
  src: string;
  sources: Source[];
  onLoad?(): void;
  ariaHidden?: boolean;
};

// The cache will be cleared on a page refresh, but should work during the browser session
const cache = new Set<string>();

export const Image = ({
  alt,
  sources,
  placeholder,
  src,
  onLoad,
  aspectWidth,
  aspectHeight,
  layout,
  ariaHidden,
}: ImageProps) => {
  const { imgRef } = useImageLoad({ onLoad: onImageLoad });
  const [isLoaded, setIsLoaded] = useState(false);

  function onImageLoad() {
    // add the src in the cache after a timeout to allow for the placeholder to transition out
    setTimeout(() => {
      cache.add(src);
    }, 1000);

    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  }

  const isCached = cache.has(src);

  const containerClassNameLayout =
    (layout === 'fill' && styles.containerFill) ||
    (layout === 'responsive' && styles.containerResponsive) ||
    '';
  const containerClassName = `${styles.containerBase} ${containerClassNameLayout}`;
  const containerInlineStyles: CSSProperties =
    (layout === 'responsive' && {
      paddingBottom: `${(aspectHeight! / aspectWidth!) * 100}%`,
    }) ||
    {};

  return (
    <div style={containerInlineStyles} className={containerClassName}>
      <PlaceHolderContext.Provider value={{ isLoaded: isLoaded }}>
        {!isCached && placeholder}
      </PlaceHolderContext.Provider>
      <picture>
        {sources.map((source, i) => (
          <source
            key={i}
            type={source.type}
            srcSet={source.srcSet}
            sizes={source.sizes}
          />
        ))}
        <img
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            width: '100%',
            height: '100%',
          }}
          // src will only be the one used when srcSet is not supported
          src={src}
          alt={alt}
          onLoad={onImageLoad}
          ref={imgRef}
          aria-hidden={ariaHidden}
        />
      </picture>
    </div>
  );
};
