import React, { CSSProperties, ReactNode } from 'react';

interface IElementWrapper {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const ElementWrapper = ({
  children,
  style,
  className,
}: IElementWrapper) => {
  return (
    <div
      className={className}
      style={{ width: '40%', maxWidth: '400px', ...style }}
    >
      {children}
    </div>
  );
};
