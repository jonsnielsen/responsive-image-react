import React, { CSSProperties } from 'react';

interface ILqip {
  base64: string;
  isImageLoaded: boolean;
  fadeOutOptions?: {
    fadeOutDurationMs: number;
  };
}

const Lqip = ({ base64, isImageLoaded, fadeOutOptions }: ILqip) => {
  const fadeOutStyles = fadeOutOptions && {
    transition: `opacity ${fadeOutOptions.fadeOutDurationMs}ms`,
    opacity: isImageLoaded ? 0 : 1,
  };

  const imageStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return <img style={{ ...imageStyles, ...fadeOutStyles }} src={base64} />;
};

export default Lqip;
