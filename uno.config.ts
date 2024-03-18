import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    colors: {
      primary: '#413ECE',
      secondary: '#8C8C8C',
      white: '#FFFFFF',
      black: '#1A1A1A',
    },
    breakpoints: {
      sm: '600px',
      md: '742px',
      lg: '1024px',
      xl: '1256px',
      desktop: '1440px',
    },
  },
})