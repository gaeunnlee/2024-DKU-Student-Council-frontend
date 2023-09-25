import { useEffectOnce } from './useEffectOnce';
import { gnbState } from 'stores/gnb-store';
import { navStore } from 'stores/nav-store';

export const useLayout = () => {
   const { setTitle, setBackButton } = gnbState();
   const { setFullscreen } = navStore();

   useEffectOnce(() => {
      return () => {
         setTitle(null);
         setBackButton(false);
         setFullscreen(false);
      };
   });

   return {
      setTitle,
      setBackButton,
      setFullscreen,
   };
};
