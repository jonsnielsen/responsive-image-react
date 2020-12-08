import React from 'react';
import { Video, VideoSource } from '../src/Video';
import exampleVideo from './assets/iftheshoefits.mp4';
import { LqipPlaceholder } from '../src/placeholder';
import { ElementWrapper } from './components/ElementWrapper';
import { MediaContainer } from './components/MediaContainer';
import { StoryWrapper } from './components/StoryWrapper';

export default { title: 'Image' };

const lqipSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAPoAAAD6AG1e1JrAAACjklEQVQoz2MI8r+Tmf5u9eqfW7f83b79//Tpq4WFCrTUf2ioPtJQfaqt8VRK/HF+7rv9+/6tW/t/+/ZXRUVr/H0uxES+nj7lC4OS/HNJ0cf21s83bPh++vT/oqIGPu4petpfIJo11Z4qyT/x9nix/9D/fYf+R0VWSgmsU5B5Ly71SknlJYOG6hMjo+fyck9qa97cvfc/L7+Ohwui+TFM81N3l6dndz1fO2ebh3XVxpwjrlaXvXWOuqqeYVCXf2wX8UbR4Glh1qtHj/8XFNbzcE1F0vxESfG5q/Xdmz7ON9ytPz+99efj0c+72le6e6VYljKIyn/0Md8boLM5s+jr62f/C/NruDkxbX7+7e6mvydz/j3b8vf9lv/Pi5du79fqus1QZXPwkt/Eqx7tW4r2b3v/33VGi7DoXB2NT0ian7i7vvz5Zvv/N9P/vtj651HX/5f1Vx6sC9r+jyFn2aQZS1cv33Soae8OnfNzBbZmyWqu0VJ5j6b5x9Otf+9P/vX27q8nO//fn3Hywmqf9X8YRA7NVLi6xf3rU+/Xd7tnTJ0aH6cht1ZD/b2m2mOgTi31p8ryTzzdX7/acu7Rmq5n2xffX9P2anH8gjkLHDf8Z/C+e9rx1nGnm0eNLmw+Om3LFe8SKbFlSorvleQfAe1UVngiLfHYxfHl3Zu/7nU17o9Jag2dcy/DvcW3uTr/JkPGt4+eT68ZntsscnhG6dypHWW1Gc3XOpp+NTd9bm76AkSN9Z8nTPh2/NS/KzmVW41sZsctvWxvPSegY8mkHwzJn155PLlifGGb/NH5Tks6Aue2zz38/sje/3v3/du37/++vf+B5N69/9dv/Hc2o2q/k+uB9jUXHK23FU3Ycfw/AKCncKyMOPelAAAAAElFTkSuQmCC';
const sources: VideoSource[] = [
  {
    src: exampleVideo,
    type: 'video/mp4',
  },
];

export const video = () => {
  return (
    <StoryWrapper>
      <ElementWrapper>
        <h2>Layout: fill</h2>
        <MediaContainer>
          <Video
            controls={false}
            sources={sources}
            playsInline
            loop
            layout="fill"
            autoPlay
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>Layout: responsive</h2>
        <MediaContainer>
          <Video
            sources={sources}
            width={1200}
            height={674}
            playsInline
            loop
            layout="responsive"
            controls={false}
            autoPlay
          />
        </MediaContainer>
      </ElementWrapper>
      <ElementWrapper>
        <h2>Background Video and Layout: responsive</h2>
        <MediaContainer>
          <Video
            sources={sources}
            width={1200}
            height={674}
            layout="responsive"
          />
        </MediaContainer>
      </ElementWrapper>

      <ElementWrapper>
        <h2>LqipPlaceholder and Layout: responsive (invalid source)</h2>
        <MediaContainer>
          <Video
            sources={[]}
            width={1200}
            height={674}
            layout="responsive"
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
        <h2>LqipPlaceholder and Layout: responsive (with valid source)</h2>
        <MediaContainer>
          <Video
            sources={sources}
            width={1200}
            height={674}
            layout="responsive"
            placeholder={
              <LqipPlaceholder
                base64={lqipSrc}
                fadeOutOptions={{ fadeOutDurationMs: 400 }}
              />
            }
          />
        </MediaContainer>
      </ElementWrapper>
    </StoryWrapper>
  );
};
