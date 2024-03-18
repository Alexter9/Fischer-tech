import antfu from '@antfu/eslint-config'

export default await antfu({
  typescript: false,
  unocss: false,
  rules: {
    'curly': ['error', 'all'],
    'antfu/top-level-function': 'off',
    'no-undef': 'off',
    'style/brace-style': ['error', '1tbs'],
  },
})
