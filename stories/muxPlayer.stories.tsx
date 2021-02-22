import React from 'react';
import { MuxPlayer } from '../src/MuxPlayer';
import { LqipPlaceholder } from '../src';
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
            muted
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper style={{ marginBottom: '100px' }}>
        <h2>Layout: resonsive (should be overflowing the border)</h2>
        <MediaContainer>
          <MuxPlayer
            isBackgroundVideo
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            layout="responsive"
            aspectWidth={500}
            aspectHeight={500}
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
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            layout="fill"
            isBackgroundVideo
            placeholder={<LqipPlaceholder base64={lqipSrc} />}
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>
          Background video using gif fallback (test in a browser where you can
          disable automatic video playing)
        </h2>
        <MediaContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            layout="fill"
            fallbackGifOptions={{ width: 500, fps: 30 }}
            isBackgroundVideo
          />
        </MediaContainer>
      </ElementWrapper>
    </StoryWrapper>
  );
};
