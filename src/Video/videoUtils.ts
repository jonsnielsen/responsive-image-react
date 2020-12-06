import { VideoSource } from './videoTypes';

export function isVideoSource(object: any): object is VideoSource {
  return 'src' in object;
}
