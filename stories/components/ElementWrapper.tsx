import React, { ReactNode } from 'react';

interface IElementWrapper {
  children: ReactNode;
}

export const ElementWrapper = ({ children }: IElementWrapper) => {
  return <div style={{ width: '40%', maxWidth: '400px' }}>{children}</div>;
};
