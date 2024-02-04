module.exports = {
  'extends': [
    '@nuxtjs/eslint-config-typescript'
  ],
  'rules': {
    'vue/no-multiple-template-root': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 2,
    'vue/max-len': ['error', {
      'code': 120,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreHTMLAttributeValues': true,
      'ignoreHTMLTextContents': true,
      'ignoreComments': true
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'quote-props': ['error', 'as-needed', { 'unnecessary': false }],
    'dot-notation': 'off',
    'object-shorthand': 'off',
    'no-prototype-builtins': 'off',
    'array-callback-return': 'off',
    'no-console': 'off'
  }
}
