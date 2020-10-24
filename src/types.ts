export type Source = {
  srcSet: string;
  type: ('image/webp' | 'image/png' | 'image/jpeg') | (string & {});
  sizes?: string;
  media?: string;
};
