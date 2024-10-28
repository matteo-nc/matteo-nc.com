import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      textShadow: {
        DEFAULT: '0 0 8px var(--tw-shadow-color)'
      },
    },
    fontFamily: {
      'jetBrainsMono': ["JetBrains Mono", 'monospace'],
    }
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
      )
    }),
  ],
} as Config;
