module.exports = {
  root: true,
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/typescript',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  rules: {
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/destructuring-assignment': ['error', 'never'],
    'react/jsx-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 200 }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'import/newline-after-import': ['error', { count: 2 }],
    'template-curly-spacing': ['error', 'always'],
  },
};
