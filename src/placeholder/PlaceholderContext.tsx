import { createContext } from 'react';

export interface IPlaceholderContext {
  isLoaded: boolean;
}
const PlaceHolderContext = createContext<IPlaceholderContext>({
  isLoaded: false,
});

export default PlaceHolderContext;
