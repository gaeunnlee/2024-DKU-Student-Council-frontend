import { useEffectOnce } from './useEffectOnce';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';

interface LayoutProps {
   title: string | null;
   backButton: boolean;
   heading?: string | null;
   subHeading?: string | null;
   fullscreen: boolean;
}

export const useLayout = () => {
   const { setTitle, setBackButton } = gnbState();
   const { setFullscreen } = navStore();
   const { setHeading, setSubHeading } = gnhState();

   useEffectOnce(() => {
      return () => {
         setLayout({
            title: null,
            backButton: true,
            heading: null,
            subHeading: null,
            fullscreen: false,
         });
      };
   });

   const setLayout = ({ title, backButton, heading, subHeading, fullscreen }: LayoutProps) => {
      title !== undefined && setTitle(title);
      setBackButton(backButton);
      heading !== undefined && setHeading(heading);
      subHeading !== undefined && setSubHeading(subHeading);
      fullscreen !== undefined && setFullscreen(fullscreen);
   };

   return { setLayout };
};
