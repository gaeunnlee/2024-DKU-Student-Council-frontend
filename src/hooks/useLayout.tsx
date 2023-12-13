import { useEffectOnce } from './useEffectOnce';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';

export const useLayout = () => {
   const { setTitle, setBackButton } = gnbState();
   const { setFullscreen } = navStore();
   const { setHeading, setSubHeading } = gnhState();

   useEffectOnce(() => {
      return () => {
         setTitle(null);
         setBackButton(false);
         setHeading(null);
         setSubHeading(null);
         setFullscreen(false);
      };
   });

   return {
      setTitle,
      setBackButton,
      setHeading,
      setSubHeading,
      setFullscreen,
   };
};
