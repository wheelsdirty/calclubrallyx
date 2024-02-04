module.exports = {
  'extends': [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  'syntax': 'scss',
  'overrides': [
    {
      'files': ['**/*.scss'],
      'customSyntax': 'postcss-scss'
    },
    {
      'files': ['**/*.vue'],
      'customSyntax': 'postcss-html',
      'rules': {
        'scss/at-import-partial-extension': null
      }
    }
  ],
  'rules': {
    'length-zero-no-unit': null,
    'media-feature-range-notation': null,
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'no-duplicate-selectors': true,
    'no-irregular-whitespace': true,
    'string-quotes': 'double',
    'no-extra-semicolons': true,
    'indentation': 2,
    'max-empty-lines': 1,
    'max-line-length': 120,
    'at-rule-name-space-after': 'always',
    'no-empty-first-line': true,
    'number-leading-zero': 'always',
    'declaration-colon-space-after': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        'ignorePseudoClasses': ['export']
      }
    ],
    'property-no-unknown': [
      true,
      {
        'ignoreSelectors': [':export']
      }
    ]
  }
}  