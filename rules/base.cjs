module.exports = {
  // * ESLINT Comments
  "eslint-comments/no-unused-disable": "error",
  "eslint-comments/disable-enable-pair": "off",

  // * Function Handling
  "no-empty-function": "error",
  "func-style": ["error", "declaration", { allowArrowFunctions: true }],

  // * Logging
  "no-console": [
    "error",
    {
      allow: ["info", "warn", "error"],
    },
  ],

  // * Object Handling
  "no-new-object": "error",
  // 'object-curly-newline': ['error', { ObjectExpression, ObjectPattern, ImportDeclaration, ExportDeclaration }],
  "object-shorthand": "error",

  // * Variables
  "prefer-const": "error",
  "no-const-assign": "error",

  // * Array Handling
  "array-callback-return": ["error", { checkForEach: true }],

  // * Template Literals
  "prefer-template": "error",
  "template-curly-spacing": ["error", "never"],

  // * Control Flow
  eqeqeq: ["error", "always"],
  "default-case": "error",
  "default-case-last": "error",
  "no-else-return": ["error", { allowElseIf: false }],
  "no-case-declarations": "error",

  // * Code Formatting
  "space-before-blocks": "error",
  "arrow-spacing": "error",
  "spaced-comment": ["error", "always"],
  "quote-props": ["error", "as-needed"],
  "max-len": [
    "error",
    {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  // * Miscellaneous
  "no-param-reassign": "error",
  "no-multi-assign": "error",

  // * Code Quality Rules
  "no-useless-escape": "error",
  "no-nested-ternary": "error",
  "no-eval": "error",
  "no-new-func": "error",
  "no-useless-constructor": "error",
  "no-plusplus": "error",
  "no-unneeded-ternary": "error",
  "no-mixed-operators": "error",
  "no-new-wrappers": ["error"],
  "prefer-destructuring": ["error", { array: true, object: true }, { enforceForRenamedProperties: false }],
  "consistent-return": "error",
  "prefer-arrow-callback": "error",
  "arrow-parens": ["error", "always"],
  "no-confusing-arrow": "error",

  quotes: [2, "double", { avoidEscape: true }],

  // * Complexity Rule
  "max-statements": ["error", 30], // Max # statements per function
  "max-params": ["error", 4], // Max # params
  "max-depth": ["error", 3], // Max depth (nested code)
  complexity: ["error", 5], // Max complexity level
  "max-lines": ["error", { max: 200 }], // Max # lines per files
  "max-nested-callbacks": ["error", 3], // Max # callbacks
  "max-statements-per-line": ["error", { max: 1 }],
};
