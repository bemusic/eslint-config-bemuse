module.exports = {
  extends: [
    require.resolve('eslint-config-standard'),
    require.resolve('eslint-config-standard-react'),
  ],
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'indent': 0,
    'jsx-quotes': [ 2, 'prefer-double' ],
    'key-spacing': [ 2, { beforeColon: false, afterColon: true, mode: 'minimum' } ],
    'no-multiple-empty-lines': 0,
    'no-multi-spaces': 0,
    'no-duplicate-imports': 0,
    'no-return-assign': [ 2, 'except-parens' ],
    'padded-blocks': 0,
    'spaced-comment': 0,
    'no-sequences': 0,
    'yoda': 0,
  }
}
