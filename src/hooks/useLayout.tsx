import { useEffectOnce } from './useEffectOnce';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';

interface HeaderTabLayoutProps {
   topHeader: boolean;
   title: string | null;
   backButton: boolean;
   isMain: boolean;
   fullscreen: boolean;
}

interface HeadingLayoutProps {
   background: boolean;
   heading?: string | null;
   subHeading?: string | null;
   isMain: boolean;
   rounded: boolean;
}

export const useLayout = () => {
   const { setTopHeader, setTitle, setBackButton, setIsMain } = gnbState();
   const { setFullscreen } = navStore();
   const { setBackground, setHeading, setSubHeading, setRounded } = gnhState();

   const setHeaderLayout = ({ topHeader, title, backButton, isMain, fullscreen }: HeaderTabLayoutProps) => {
      setTopHeader(topHeader);
      title && setTitle(title);
      setBackButton(backButton);
      setIsMain(isMain);
      setFullscreen(fullscreen);
   };

   const setHeadingLayout = ({ background, heading, subHeading, rounded }: HeadingLayoutProps) => {
      setBackground(background);
      heading && setHeading(heading);
      subHeading && setSubHeading(subHeading);
      setRounded(rounded);
   };

   const setLayout = ({
      topHeader,
      title,
      backButton,
      isMain,
      fullscreen,
      background,
      heading,
      subHeading,
      rounded,
   }: HeaderTabLayoutProps & HeadingLayoutProps) => {
      setHeaderLayout({ topHeader, title, backButton, isMain, fullscreen });
      setHeadingLayout({ background, heading, subHeading, isMain, rounded });
   };

   useEffectOnce(() => {
      return () => {
         setLayout({
            topHeader: true,
            title: null,
            backButton: true,
            isMain: false,
            fullscreen: false,
            background: false,
            heading: null,
            subHeading: null,
            rounded: true,
         });
      };
   });

   return { setLayout };
};
