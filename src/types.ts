export enum Layout {
  Responsive = 'responsive',
  Fill = 'fill',
  Fixed = 'fixed',
}
// export type Layout = 'responsive' | 'fill' | 'fixed';

const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'responsive'] as const;
type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

export type MediaBaseProps = {
  // layout: Layout;
  layout: LayoutValue;
  placeholder?: React.ReactNode;
} & (
  | {
      width?: never;
      height?: never;
      layout: 'fill';
    }
  | {
      width: number;
      height: number;
      layout: Exclude<LayoutValue, 'Fill'>;
    }
);

export type VideoBaseProps = MediaBaseProps &
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > & {
    // autoPlay?: boolean;
    // loop?: boolean;
    /**
     * A Boolean attribute indicating that the video is to be played "inline", that is within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
     */
    // playsInline?: boolean;
    // showControls?: boolean;
    isBackgroundVideo?: boolean;
    // muted?: boolean;
    onLoad?(): void;
  };

export type Source = {
  srcSet: string;
  type: ('image/webp' | 'image/png' | 'image/jpeg') | (string & {});
  sizes?: string;
  media?: string;
};
