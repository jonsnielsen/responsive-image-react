import React, { useState } from 'react';
import PlaceHolderContext from './placeholder/PlaceholderContext';
import { Source } from './types';
import { useImageLoad } from './utils';

export interface IImage {
  alt: string;
  aspectRatio: number;
  src: string;
  sources: Source[];
  placeholder?: React.ReactNode;
  onLoad?(): void;
}

const Image = ({
  alt,
  aspectRatio,
  sources,
  placeholder,
  src,
  onLoad,
}: IImage) => {
  const { imgRef } = useImageLoad({ onLoad: onImageLoad });
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function onImageLoad() {
    console.log('onImageLoadCalled');
    setIsImageLoaded(true);
    if (onLoad) {
      onLoad();
    }
  }

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div style={{ paddingBottom: `${aspectRatio * 100}%` }}>
        <PlaceHolderContext.Provider value={{ isImageLoaded }}>
          {placeholder}
        </PlaceHolderContext.Provider>
        <picture>
          {sources.map(source => (
            <source
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
    </div>
  );
};

export default Image;
