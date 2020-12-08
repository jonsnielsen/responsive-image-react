import React from 'react';
import { MuxPlayer } from '../src/MuxPlayer';
import exampleVideo from './assets/iftheshoefits.mp4';
import { ElementWrapper } from './components/ElementWrapper';
import { MediaContainer } from './components/MediaContainer';
import { StoryWrapper } from './components/StoryWrapper';

export default { title: 'Image' };

const lqipSrc =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAYH/8QAIxAAAgIBAwQDAQAAAAAAAAAAAQIDBAAFESESFDFREyJhof/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECERIDMf/aAAwDAQACEQMRAD8ApaFSpy1kMkjbqOCeOo+8a7fo9m9e2V+ZRz1Hz6znlHUbFqksZkZGT7B0O38yW5WDRNNM7ySt5YnJyjpUxKprwfUJ6vdOC223HnfDMrbHTMQCdv3DEuaBhH//2Q==';

export const mux = () => {
  return (
    <StoryWrapper>
      <ElementWrapper>
        <h2>Layout: fill</h2>
        <MediaContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            controls={false}
            playsInline
            loop
            layout="fill"
            autoPlay
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>Layout: resonsive</h2>
        <MediaContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            layout="responsive"
            controls
            height={675}
            width={1200}
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>Background video with Layout: fill</h2>
        <MediaContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            layout="fill"
            isBackgroundVideo
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>Placeholder and Layout: fill</h2>
        <MediaContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Ys7cRGLWg3oB01KQTCCN7Y"
            layout="fill"
          />
        </MediaContainer>
      </ElementWrapper>
    </StoryWrapper>
  );
};
