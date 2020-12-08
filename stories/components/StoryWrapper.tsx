import React, { ReactNode } from 'react';

interface IStoryWrapper {
  children: ReactNode;
}

export const StoryWrapper = ({ children }: IStoryWrapper) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  );
};
