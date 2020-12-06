import React from 'react';
import { Vimeo } from '../src/Vimeo';

export default { title: 'Image' };

const lqipSrc =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAYH/8QAIxAAAgIBAwQDAQAAAAAAAAAAAQIDBAAFESESFDFREyJhof/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECERIDMf/aAAwDAQACEQMRAD8ApaFSpy1kMkjbqOCeOo+8a7fo9m9e2V+ZRz1Hz6znlHUbFqksZkZGT7B0O38yW5WDRNNM7ySt5YnJyjpUxKprwfUJ6vdOC223HnfDMrbHTMQCdv3DEuaBhH//2Q==';

export const vimeo = () => {
  return (
    <div
      style={{
        width: '400px',
        height: '500px',
        border: '2px solid black',
      }}
    >
      <Vimeo layout="fill" videoId="239839786" />
    </div>
  );
};
