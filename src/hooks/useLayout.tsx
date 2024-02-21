import { useEffect } from 'react';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';

interface TopHeaderLayoutProps {
   title: string | null;
   backButton: boolean;
   isMain: boolean;
}

interface HeadingLayoutProps {
   heading?: string | null;
   subHeading?: string | null;
   headingStyle?: string;
   headingText?: string;
   subHeadingText?: string;
}

interface NavLayoutProps {
   margin: string;
   fullscreen: boolean;
   rounded: boolean;
}

export const useLayout = () => {
   const { setTitle, setBackButton, setIsMain } = gnbState();
   const { setHeading, setSubHeading, setHeadingStyle, setHeadingText, setsubHeadingText } = gnhState();
   const { setFullscreen, setRounded, setMargin } = navStore();

   useEffect(() => {
      setHeadingLayout({
         heading: ' ',
         subHeading: ' ',
         headingStyle: ' ',
         headingText: '',
         subHeadingText: ' ',
      });
   }, []);

   const setTopHeader = ({ title, backButton, isMain }: TopHeaderLayoutProps) => {
      setTitle(title);
      setBackButton(backButton);
      setIsMain(isMain);
   };

   const setHeadingLayout = ({
      heading,
      subHeading,
      headingStyle,
      headingText,
      subHeadingText,
   }: HeadingLayoutProps) => {
      heading && setHeading(heading);
      subHeading && setSubHeading(subHeading);
      headingStyle && setHeadingStyle(headingStyle);
      headingText && setHeadingText(headingText);
      subHeadingText && setsubHeadingText(subHeadingText);
   };

   const setNavLayout = ({ margin, fullscreen, rounded }: NavLayoutProps) => {
      setMargin(margin);
      setFullscreen(fullscreen);
      setRounded(rounded);
   };

   const setLayout = ({
      title,
      backButton,
      isMain,
      fullscreen,
      heading,
      subHeading,
      headingStyle,
      headingText,
      subHeadingText,
      margin,
      rounded,
   }: TopHeaderLayoutProps & HeadingLayoutProps & NavLayoutProps) => {
      setTopHeader({ title, backButton, isMain });
      setHeadingLayout({ heading, subHeading, headingStyle, headingText, subHeadingText });
      setNavLayout({ margin, fullscreen, rounded });
   };

   return { setLayout };
};
