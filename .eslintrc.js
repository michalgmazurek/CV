module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: [],
  root: true,
  rules: {
    curly: [
      'error',
      'all',
    ],
    'brace-style': [
      'error',
      '1tbs',
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      },
    ],
    quotes: [
      'error',
      'single',
    ],
    'array-element-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      },
    ],
    'arrow-parens': [
      2,
      'as-needed',
    ],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        vue: 'never',
        js: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external',
          ],
          'internal',
          [
            'parent',
            'sibling',
          ],
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/layout/**',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@/components/**',
          },
          {
            group: 'internal',
            pattern: '@/pages/**',
          },
          {
            group: 'external',
            pattern: '@/eventBus',
            position: 'after',
          },
          {
            group: 'internal',
            pattern: '@/utils/**',
            position: 'after',
          },
          {
            group: 'internal',
            pattern: '@/mixins/**',
            position: 'before',
          },
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: [
          'invalidHref',
          'preferButton',
        ],
        components: ['Link'],
        specialLink: [
          'hrefLeft',
          'hrefRight',
        ],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: [
            'nesting',
            'id',
          ],
        },
      },
    ],
    'jsx-a11y/media-has-caption': 'off',
    'multiline-ternary': [
      'warn',
      'always-multiline',
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-param-reassign': [
      'error',
      { props: false },
    ],
    'no-shadow': [
      'error',
      {
        allow: [
          'state',
          'getters',
          'mutations',
          'actions',
        ],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
        'warn',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_'
        }
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        minProperties: 2,
        multiline: true,
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: [
          'return',
          'class',
          'export',
          'switch',
          'throw',
          'try',
          'while',
          'for',
          'block',
          'if',
        ],
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: [
          'const',
          'let',
          'var',
        ],
      },
      {
        blankLine: 'any',
        next: [
          'const',
          'let',
          'var',
        ],
        prev: [
          'const',
          'let',
          'var',
        ],
      },
      {
        blankLine: 'any',
        next: ['export'],
        prev: ['export'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'single',
          'multiple',
          'all',
          'none',
        ],
      },
    ],
    'sort-keys': 'off',
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/max-len': [
      'warn',
      {
        code: 120,
        template: 120,
        comments: 120,
        ignorePattern: '',
        ignoreComments: true,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
      },
    ],
    'vue/padding-lines-in-component-definition': [
      'error',
      {
        betweenOptions: 'never',
        withinOption: {
          props: 'never',
          data: 'never',
          computed: 'never',
          methods: 'never',
          watch: 'never',
          filters: 'never',
        },
      },
    ],
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/order-in-components': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-template-target-blank': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
    ],
    'vue/require-prop-types': 'error',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
  settings: {
    'import/core-modules': ['vuex'],
    'import/resolver': {
      alias: {
        extensions: [
          '.vue',
          '.js',
        ],
        map: [
          [
            '@',
            '.',
          ],
        ],
      },
    },
  },
};
