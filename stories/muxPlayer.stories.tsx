import React from 'react';
import { MuxPlayer } from '../src/MuxPlayer';
import exampleVideo from './assets/iftheshoefits.mp4';

export default { title: 'Image' };

const lqipSrc =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAYH/8QAIxAAAgIBAwQDAQAAAAAAAAAAAQIDBAAFESESFDFREyJhof/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECERIDMf/aAAwDAQACEQMRAD8ApaFSpy1kMkjbqOCeOo+8a7fo9m9e2V+ZRz1Hz6znlHUbFqksZkZGT7B0O38yW5WDRNNM7ySt5YnJyjpUxKprwfUJ6vdOC223HnfDMrbHTMQCdv3DEuaBhH//2Q==';

// const sources: VideoSource[] = [
//   {
//     //
//     src: exampleVideo,
//     type: 'video/mp4',
//   },
// ];
// https://image.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc/animated.gif
//image.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc/animated.gif
//stream.mux.com/QhB33iydisgSEarLVrPFxm9ssRfyom7duGHZOfjfZIc/yo.mp4?download=smt
const VideoContainer = ({ children }: { children: any }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        border: '2px solid black',
      }}
    >
      {children}
    </div>
  );
};

export const mux = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ width: '40%' }}>
        <h2>Layout: fill</h2>
        <VideoContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            controls={false}
            playsInline
            loop
            layout="fill"
            autoPlay
          />
        </VideoContainer>
      </div>
      <div style={{ width: '40%' }}>
        <h2>Layout: fill</h2>
        <VideoContainer>
          <MuxPlayer
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            layout="responsive"
            controls
            width={675}
            height={1200}
          />
        </VideoContainer>
      </div>
      <div style={{ width: '40%' }}></div>
      <div style={{ width: '40%' }}>
        <h2>Layout: responsive</h2>
        <VideoContainer>
          <MuxPlayer
            height={1200}
            width={674}
            playsInline={false}
            playbackId="YLXRY1MB00yDUjgP9KQEP2Yhs7cRGLWg3oB01KQTCCN7Y"
            controls
            loop={false}
            layout="responsive"
            autoPlay={false}
          />
        </VideoContainer>
      </div>
    </div>
  );
};
