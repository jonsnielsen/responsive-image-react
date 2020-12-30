import { ReactElement } from 'react';

const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'responsive'] as const;
type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

export type LayoutFillProps = {
  layout: 'fill';
  width?: never;
  height?: never;
};

export type LayoutOtherProps = {
  layout: 'fixed' | 'responsive';
  width: number;
  height: number;
};

export type MediaBaseProps = {
  layout: LayoutValue;
  placeholder?: ReactElement;
} & (LayoutFillProps | LayoutOtherProps);

export type BackgroundVideoProps = {
  isBackgroundVideo: true;
  muted?: never;
  autoPlay?: never;
  loop?: never;
  playsInline?: never;
  controls?: never;
};

export type VideoControlProps = {
  isBackgroundVideo?: never;
  muted: boolean;
  autoPlay: boolean;
  loop: boolean;
  playsInline: boolean;
  controls: boolean;
};

export type VideoBaseProps = MediaBaseProps & {
  onLoad?(): void;
} & (BackgroundVideoProps | VideoControlProps);

export type Source = {
  srcSet: string;
  type: ('image/webp' | 'image/png' | 'image/jpeg') | (string & {});
  sizes?: string;
  media?: string;
};
