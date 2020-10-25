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

interface ILqip {
  base64: string;
  fadeOutOptions?: {
    fadeOutDurationMs: number;
  };
}

const Lqip = ({ base64, fadeOutOptions }: ILqip) => {
  const { isImageLoaded } = useContext(PlaceHolderContext);

  const fadeOutStyles = fadeOutOptions && {
    transition: `opacity ${fadeOutOptions.fadeOutDurationMs}ms`,
    opacity: isImageLoaded ? 0 : 1,
  };

  return <img style={{ ...imageStyles, ...fadeOutStyles }} src={base64} />;
};

export default Lqip;
