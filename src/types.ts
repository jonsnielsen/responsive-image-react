import { ReactElement, CSSProperties } from 'react';

const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'responsive'] as const;
type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

export type LayoutFillProps = {
  layout: 'fill';
  aspectWidth?: never;
  aspectHeight?: never;
};

export type LayoutOtherProps = {
  layout: 'fixed' | 'responsive';
  aspectWidth: number;
  aspectHeight: number;
};

export type MediaBaseProps = {
  layout: LayoutValue;
  placeholder?: ReactElement;
  className?: string;
  style?: CSSProperties;
} & (LayoutFillProps | LayoutOtherProps);

export type BackgroundVideoProps = {
  isBackgroundVideo: true;
  muted?: never;
  autoPlay?: boolean;
  loop?: never;
  controls?: never;
  /**
   * If true, remote playback like chromecast is disabled
   */
  disableRemotePlayback?: never;
};

export type VideoControlProps = {
  isBackgroundVideo?: never;
  muted: boolean;
  autoPlay: boolean;
  loop: boolean;
  controls: boolean;
  /**
   * If true, remote playback like chromecast is disabled
   */
  disableRemotePlayback: boolean;
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

export type FadeOutOptions = {
  fadeOutDurationMs: number;
};
