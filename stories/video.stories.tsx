import React from 'react';
import { Video, VideoSource } from '../src/Video';
import exampleVideo from './assets/iftheshoefits.mp4';

export default { title: 'Image' };

const lqipSrc =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAYH/8QAIxAAAgIBAwQDAQAAAAAAAAAAAQIDBAAFESESFDFREyJhof/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECERIDMf/aAAwDAQACEQMRAD8ApaFSpy1kMkjbqOCeOo+8a7fo9m9e2V+ZRz1Hz6znlHUbFqksZkZGT7B0O38yW5WDRNNM7ySt5YnJyjpUxKprwfUJ6vdOC223HnfDMrbHTMQCdv3DEuaBhH//2Q==';

const sources: VideoSource[] = [
  {
    //
    src: exampleVideo,
    type: 'video/mp4',
  },
];

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

export const video = () => {
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
          <Video
            controls={false}
            sources={sources}
            playsInline
            loop
            layout="fill"
            autoPlay
          />
        </VideoContainer>
      </div>
      <div style={{ width: '40%' }}>
        <h2>Layout: responsive</h2>
        <VideoContainer>
          <Video
            sources={sources}
            height={1200}
            width={674}
            playsInline
            loop
            layout="responsive"
            controls={false}
            autoPlay
          />
        </VideoContainer>
      </div>
    </div>
  );
};
