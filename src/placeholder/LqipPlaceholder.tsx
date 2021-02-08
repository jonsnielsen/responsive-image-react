import React, { useContext, CSSProperties, useState } from 'react';
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
  const { isLoaded } = useContext(PlaceHolderContext);
  const [isTransitionEnded, setIsTransitionEnded] = useState(false);

  const fadeOutStyles = fadeOutOptions && {
    transition: `opacity ${fadeOutOptions.fadeOutDurationMs}ms`,
  };

  // remove the image from dom when isLoaded (or when transition is ended)
  const isHidden = fadeOutStyles ? isTransitionEnded && isLoaded : isLoaded;

  return isHidden ? null : (
    <img
      style={{
        ...imageStyles,
        ...fadeOutStyles,
        opacity: isLoaded ? 0 : 1,
      }}
      aria-hidden={true}
      src={base64}
      onTransitionEnd={() => {
        setIsTransitionEnded(true);
      }}
    />
  );
};
