import React from 'react';
import { Vimeo } from '../src/Vimeo';
import { ElementWrapper, MediaContainer, StoryWrapper } from './components';

export default { title: 'Image' };

export const vimeo = () => {
  return (
    <StoryWrapper>
      <ElementWrapper>
        <h2>Layout: responsive (background video, autoplay)</h2>
        <MediaContainer>
          <Vimeo
            layout="responsive"
            videoId="239839786"
            aspectWidth={176}
            aspectHeight={99}
            isBackgroundVideo
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>Layout: responsive (autoplay with controls)</h2>
        <MediaContainer>
          <Vimeo
            layout="responsive"
            videoId="239839786"
            aspectWidth={176}
            aspectHeight={99}
            autoPlay
            muted
            loop
            controls
          />
        </MediaContainer>
      </ElementWrapper>
    </StoryWrapper>
  );
};
99 / 176;
