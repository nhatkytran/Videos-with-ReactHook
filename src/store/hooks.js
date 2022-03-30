import { useContext } from 'react';
import Context from './Context';

const useContextCustom = function () {
  return useContext(Context);
};

export { useContextCustom };
