import type { Theme as ChakraTheme, ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { styles } from 'constants/style';

const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: false,
};

const theme = extendTheme({
   config,
   ...styles,
}) as Theme;

type Theme = ChakraTheme;

export type { Theme };
export default theme;
