const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      button: ['focus-visible'],
      colors: {
        dark: {
          100: '#191D22'
        },
        light: {
          100: '#F1F4F9'
        }
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' }
        // => @media (max-width: 639px) { ... }
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            code: {
              fontWeight: '500',
              padding: '2px 6px'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            h2: {
              'font-weight': '400',
              'padding-top': '20px',
              'margin-top': '1.4em'
            },
            h3: {
              'font-weight': '400'
            },
            img: {
              'border-radius': '6px'
            }
          }
        },
        dark: {
          css: {
            'ul > li:before': {
              'background-color': theme('colors.gray.600')
            },
            h2: {
              color: theme('colors.gray.200'),
              'font-weight': '300'
            },
            h3: {
              color: theme('colors.gray.200'),
              'font-weight': '300'
            },
            color: theme('colors.gray.200'),
            'font-weight': '300',
            strong: {
              color: theme('colors.gray.200'),
              'font-weight': '500'
            },
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.500')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
