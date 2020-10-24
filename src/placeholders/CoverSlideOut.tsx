import React, { CSSProperties } from 'react';

interface ICoverSlideOut {
  coverColor: string;
  isImageLoaded: boolean;
  fadeOutOptions?: {
    fadeOutDurationMs: number;
  };
}

const CoverSlideOut = ({ isImageLoaded, fadeOutOptions, coverColor }: ICoverSlideOut) => {
  const transitionOutStyles = fadeOutOptions && {
    transition: `transform ${fadeOutOptions.fadeOutDurationMs}ms`,
    transform: `translate3D(0, ${isImageLoaded ? '-100%' : '0%'}, 0)`,
  };

  const coverWrapperContainerStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  };
  const coverWrapperStyles: CSSProperties = {
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
  };

  const coverStyles: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: coverColor,
  };

  return (
    <div style={coverWrapperContainerStyles}>
      <div style={coverWrapperStyles}>
        <div style={{ ...coverStyles, ...transitionOutStyles }} />
      </div>
    </div>
  );
};

export default CoverSlideOut;
