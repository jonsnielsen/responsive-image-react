import { createContext } from 'react';

interface IPlaceholderContext {
  isImageLoaded: boolean;
}
const PlaceHolderContext = createContext<IPlaceholderContext>({
  isImageLoaded: false,
});

export default PlaceHolderContext;
