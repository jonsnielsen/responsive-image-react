import { ReactElement } from 'react';

const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'responsive'] as const;
type LayoutValue = typeof VALID_LAYOUT_VALUES[number];

export type MediaBaseProps = {
  layout: LayoutValue;
  placeholder?: ReactElement;
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

// export type VideoBaseProps = MediaBaseProps & {
//   isBackgroundVideo?: boolean;
//   onLoad?(): void;
// };
export type VideoBaseProps = Omit<
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >,
  'placeholder'
> &
  MediaBaseProps & {
    isBackgroundVideo?: boolean;
    onLoad?(): void;
  };

export type Source = {
  srcSet: string;
  type: ('image/webp' | 'image/png' | 'image/jpeg') | (string & {});
  sizes?: string;
  media?: string;
};
