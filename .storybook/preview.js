import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

// We'll import our theme once we analyze the JSON structure
import { theme } from '../src/theme';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    }
  },

  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      themes: {
        default: theme,
      },
      defaultTheme: 'default',
    })
  ],
};

export default preview;