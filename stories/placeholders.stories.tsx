import React, { useEffect, useState } from 'react';
import { Image } from '../src/Image';
import { Vimeo } from '../src/Vimeo';
import { Video, VideoSource } from '../src/Video';
import { Source } from '../src/types';
import {
  LqipPlaceholder,
  CoverPlaceholder,
  ImagePlaceholder,
} from '../src/placeholder';
import exampleVideo from './assets/iftheshoefits.mp4';
import { StoryWrapper } from './components/StoryWrapper';
import { ElementWrapper } from './components/ElementWrapper';
import { MediaContainer } from './components/MediaContainer';

export default { title: 'Image' };

const sanitySrc =
  'https://cdn.sanity.io/images/lwmsqpyb/production/7410d872197e5227a394031e43cf45669206b3ed-1920x1280.jpg';

const videoSources: VideoSource[] = [
  {
    src: exampleVideo,
    type: 'video/mp4',
  },
];

const imageSources: Source[] = [
  {
    type: 'image/webp',
    srcSet: `${sanitySrc}?w=300&auto=format 300w, ${sanitySrc}?w=475&auto=format 475w, ${sanitySrc}?w=600&auto=format 600w, ${sanitySrc}?w=950&auto=format 950w`,
    sizes:
      '(max-width: 400px) 67vw, (max-width: 500px) 78vw, (max-width: 700px) 91vw, 1900px',
  },
  {
    type: 'image/png',
    srcSet: `${sanitySrc}?w=300 300w, ${sanitySrc}?w=475 475w, ${sanitySrc}?w=600 600w, ${sanitySrc}?w=950 950w`,
    sizes:
      '(max-width: 400px) 67vw, (max-width: 500px) 78vw, (max-width: 700px) 91vw, 1900px',
  },
];

const lqipSrc =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAYH/8QAIxAAAgIBAwQDAQAAAAAAAAAAAQIDBAAFESESFDFREyJhof/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECERIDMf/aAAwDAQACEQMRAD8ApaFSpy1kMkjbqOCeOo+8a7fo9m9e2V+ZRz1Hz6znlHUbFqksZkZGT7B0O38yW5WDRNNM7ySt5YnJyjpUxKprwfUJ6vdOC223HnfDMrbHTMQCdv3DEuaBhH//2Q==';

export const placeholders = () => {
  return (
    <StoryWrapper>
      <ElementWrapper>
        LqipPlaceholder (persistent since image has invalid src)
        <MediaContainer>
          <Vimeo
            layout="responsive"
            videoId="239839786"
            aspectWidth={176}
            aspectHeight={99}
            isBackgroundVideo
            placeholder={
              <ImagePlaceholder
                src={sanitySrc}
                sources={imageSources}
                base64={lqipSrc}
                fadeOutOptions={{ fadeOutDurationMs: 300 }}
              />
            }
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        LqipPlaceholder (persistent since image has invalid src)
        <MediaContainer>
          <Video
            isBackgroundVideo
            sources={videoSources}
            layout="responsive"
            aspectWidth={176}
            aspectHeight={99}
            placeholder={
              <ImagePlaceholder
                src={sanitySrc}
                sources={imageSources}
                base64={lqipSrc}
                fadeOutOptions={{ fadeOutDurationMs: 300 }}
              />
            }
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        lqip (Fading Out)
        <MediaContainer>
          <Image
            layout="responsive"
            aspectWidth={5}
            aspectHeight={3.3}
            src={sanitySrc}
            sources={[]}
            alt=""
            placeholder={
              <LqipPlaceholder
                base64={lqipSrc}
                fadeOutOptions={{ fadeOutDurationMs: 400 }}
              />
            }
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        Cover Slide (Sliding out)
        <MediaContainer>
          <Image
            alt=""
            aspectWidth={5}
            aspectHeight={3.3}
            layout="responsive"
            src={sanitySrc}
            sources={[]}
            placeholder={
              <CoverPlaceholder
                coverColor="#33aaff"
                fadeOutOptions={{ fadeOutDurationMs: 300 }}
              />
            }
          />
        </MediaContainer>
      </ElementWrapper>
    </StoryWrapper>
  );
};
