import { useEffectOnce } from './useEffectOnce';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';

interface HeaderTabLayoutProps {
   title: string | null;
   backButton: boolean;
   isMain: boolean;
   fullscreen: boolean;
}

interface HeadingLayoutProps {
   heading?: string | null;
   subHeading?: string | null;
   isMain: boolean;
}

export const useLayout = () => {
   const { setTitle, setBackButton, setIsMain } = gnbState();
   const { setFullscreen } = navStore();
   const { setHeading, setSubHeading } = gnhState();

   const setHeaderLayout = ({ title, backButton, isMain, fullscreen }: HeaderTabLayoutProps) => {
      title && setTitle(title);
      setBackButton(backButton);
      setIsMain(isMain);
      setFullscreen(fullscreen);
   };

   const setHeadingLayout = ({ heading, subHeading }: HeadingLayoutProps) => {
      heading && setHeading(heading);
      subHeading && setSubHeading(subHeading);
   };

   const setLayout = ({
      title,
      backButton,
      isMain,
      fullscreen,
      heading,
      subHeading,
   }: HeaderTabLayoutProps & HeadingLayoutProps) => {
      setHeaderLayout({ title, backButton, isMain, fullscreen });
      setHeadingLayout({ heading, subHeading, isMain });
   };

   useEffectOnce(() => {
      return () => {
         setLayout({
            title: null,
            backButton: true,
            isMain: false,
            fullscreen: false,
            heading: null,
            subHeading: null,
         });
      };
   });

   return { setLayout };
};
