import React, { ReactElement, useState, CSSProperties } from 'react';
import PlaceHolderContext from '../placeholder/PlaceholderContext';
import { MediaBaseProps, Source } from '../types';
import { useImageLoad } from '../utils';
import styles from '../styles.module.css';

export type ImageProps = MediaBaseProps & {
  alt: string;
  src: string;
  sources: Source[];
  onLoad?(): void;
};

const Image = ({
  alt,
  sources,
  placeholder,
  src,
  onLoad,
  width,
  height,
  layout,
}: ImageProps) => {
  const { imgRef } = useImageLoad({ onLoad: onImageLoad });
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function onImageLoad() {
    console.log('onImageLoadCalled');
    setIsImageLoaded(true);
    if (onLoad) {
      onLoad();
    }
  }

  // const containerInlineStyles: CSSProperties =
  //   (layout === 'responsive' && {
  //     paddingBottom: `${(width! / height!) * 100}%`,
  //   }) ||
  //   {};

  const containerClassNameLayout =
    (layout === 'fill' && styles.containerFill) ||
    (layout === 'responsive' && styles.containerResponsive) ||
    '';
  const containerClassName = `${styles.containerBase} ${containerClassNameLayout}`;
  const containerInlineStyles: CSSProperties =
    (layout === 'responsive' && {
      paddingBottom: `${(height! / width!) * 100}%`,
    }) ||
    {};

  return (
    <div style={containerInlineStyles} className={containerClassName}>
      <PlaceHolderContext.Provider value={{ isImageLoaded }}>
        {placeholder}
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
        />
      </picture>
    </div>
  );
};

export default Image;
