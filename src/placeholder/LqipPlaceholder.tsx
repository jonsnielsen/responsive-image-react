import React, { useContext, CSSProperties } from 'react';
import PlaceHolderContext from './PlaceholderContext';

const imageStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export interface LqipPlaceholderProps {
  base64: string;
  fadeOutOptions?: {
    fadeOutDurationMs: number;
  };
}

export const LqipPlaceholder = ({
  base64,
  fadeOutOptions,
}: LqipPlaceholderProps) => {
  const { isImageLoaded } = useContext(PlaceHolderContext);

  const fadeOutStyles = fadeOutOptions && {
    transition: `opacity ${fadeOutOptions.fadeOutDurationMs}ms`,
    opacity: isImageLoaded ? 0 : 1,
  };

  return <img style={{ ...imageStyles, ...fadeOutStyles }} src={base64} />;
};
