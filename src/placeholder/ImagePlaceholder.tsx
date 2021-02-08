import React, { useState, useContext, CSSProperties } from 'react';
import PlaceHolderContext from './PlaceholderContext';
import { Image, ImageProps } from '../Image';
import { LqipPlaceholder } from './LqipPlaceholder';
import { FadeOutOptions } from '../types';

const wrapperStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export type ImagePlaceholderProps = {
  base64: string;
  fadeOutOptions?: FadeOutOptions;
  lqipFadeOutOptions?: FadeOutOptions;
  sources: ImageProps['sources'];
  src: ImageProps['src'];
};

/**
 *
 * This placeholder starts with a LQIP, then resolves the full resolution image which is the the placeholder
 */
export const ImagePlaceholder = ({
  base64,
  fadeOutOptions,
  lqipFadeOutOptions,
  sources,
  src,
}: ImagePlaceholderProps) => {
  const { isLoaded } = useContext(PlaceHolderContext);
  const [isTransitionEnded, setIsTransitionEnded] = useState(false);

  const fadeOutStyles = fadeOutOptions && {
    transition: `opacity ${fadeOutOptions.fadeOutDurationMs}ms`,
  };

  const isHidden = fadeOutStyles ? isTransitionEnded && isLoaded : isLoaded;

  return isHidden ? null : (
    <div
      style={{
        ...wrapperStyles,
        opacity: isLoaded ? 0 : 1,
        ...fadeOutStyles,
      }}
      onTransitionEnd={() => {
        setIsTransitionEnded(true);
      }}
    >
      <Image
        placeholder={
          <LqipPlaceholder
            base64={base64}
            fadeOutOptions={lqipFadeOutOptions}
          />
        }
        layout="fill"
        sources={sources}
        src={src}
        // alt should be empty, as the placeholder is not content we want visible to screen reader / search indexed
        alt=""
        aria-hidden
      />
    </div>
  );
};
