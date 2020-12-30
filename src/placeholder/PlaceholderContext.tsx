import { createContext } from 'react';

export interface IPlaceholderContext {
  isImageLoaded: boolean;
}
const PlaceHolderContext = createContext<IPlaceholderContext>({
  isImageLoaded: false,
});

export default PlaceHolderContext;
