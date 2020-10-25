import React, { useState } from 'react';
import Image from '../src/Image';
import { Source } from '../src/types';
import {
  LqipPlaceholder,
  ColorCoverPlaceholder,
} from '../src/placeholder/index';

export default { title: 'Image' };

const sanitySrc =
  'https://cdn.sanity.io/images/lwmsqpyb/production/7410d872197e5227a394031e43cf45669206b3ed-1920x1280.jpg';

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

export const image = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>Resolution switching with (with webp and png)</h2>
      <div style={{ width: '80%', maxWidth: '1200px' }}>
        <Image
          alt="hello"
          aspectRatio={0.66}
          src={sanitySrc}
          sources={imageSources}
          // placeholder={<Lqip base64={lqipSrc} />}
        />
        helloo
      </div>
      <h2>
        Combining Art Direction with Resolution Switching (with webp and png)
      </h2>
      <div style={{ width: '80%', maxWidth: '1200px' }}>
        <Image
          alt="hello"
          aspectRatio={0.66}
          src={sanitySrc}
          sources={imageSources}
          // placeholder={<Lqip base64={lqipSrc} />}
        />
        helloo
      </div>
    </div>
  );
};

export const placeholders = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '20px',
      }}
    >
      <div>
        lqip (Low Quality Image Placeholder)
        <Image
          alt=""
          aspectRatio={0.66}
          src={sanitySrc}
          sources={[]}
          placeholder={<LqipPlaceholder base64={lqipSrc} />}
        />
      </div>
      <div>
        lqip (Fading Out)
        <Image
          alt=""
          aspectRatio={0.66}
          src={sanitySrc}
          sources={[]}
          placeholder={
            <LqipPlaceholder
              base64={lqipSrc}
              fadeOutOptions={{ fadeOutDurationMs: 400 }}
            />
          }
        />
      </div>
      <div>
        Cover Slide (Sliding out)
        <Image
          alt=""
          aspectRatio={0.66}
          src={sanitySrc}
          sources={[]}
          placeholder={
            <ColorCoverPlaceholder
              coverColor="#418031"
              fadeOutOptions={{ fadeOutDurationMs: 300 }}
            />
          }
        />
      </div>
    </div>
  );
};
