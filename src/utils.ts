import { useRef, useEffect } from 'react';

interface IUseImageLoad {
  onLoad(): void;
}

/**
 *  Necessary in the rare event that the image source is loaded by the browser before javascript is initialized, meaning that the onLoad in the <img /> element won't fire
 */
export function useImageLoad({ onLoad }: IUseImageLoad) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      onLoad();
    }
  }, []);

  return { imgRef };
}
