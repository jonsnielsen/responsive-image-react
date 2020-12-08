import React, { ReactNode } from 'react';

interface IMediaContainer {
  children: ReactNode;
}

export const MediaContainer = ({ children }: IMediaContainer) => {
  return (
    <div style={{ width: '100%', height: '500px', border: '2px solid black' }}>
      {children}
    </div>
  );
};
