'use strict';

 module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "worker": true,
    "mocha": true,
    "es6": true,
    "phantomjs": true,
    "shelljs": true
  },
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "plugins": [
    "babel"
  ],
  "rules": {
    "no-case-declarations": 2,
    "no-empty-pattern": 2,
    "no-fallthrough": 2,
    "no-global-assign": 2,
    "no-octal": 2,
    "no-redeclare": 2,
    "no-self-assign": 2,
    "no-unused-labels": 2,
    "no-useless-escape": 2,
    "accessor-pairs": 2,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "class-methods-use-this": 1,
    "curly": 1,
    "default-case": 2,
    "eqeqeq": 1,
    "guard-for-in": 2,
    "no-caller": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-label": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 1,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "radix": 2,
    "require-await": 2,
    "callback-return": 2,
    "global-require": 2,
    "handle-callback-err": 2,
    "no-buffer-constructor": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "babel/no-invalid-this": 2,
    "constructor-super": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "require-yield": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "for-direction": 2,
    "getter-return": 2,
    "no-await-in-loop": 2,
    "no-prototype-builtins": 2,
    "no-template-curly-in-string": 2,
    "array-bracket-newline": 0,
    "array-bracket-spacing": [
      2,
      "never"
    ],
    "array-element-newline": 0,
    "block-spacing": [
      2,
      "always"
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": [
      2,
      {
        "properties": "never"
      }
    ],
    "capitalized-comments": 0,
    "comma-dangle": [
      2,
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      2,
      "last",
      {
        "exceptions": {
          "ArrayExpression": false,
          "ArrayPattern": false,
          "ArrowFunctionExpression": false,
          "CallExpression": false,
          "FunctionDeclaration": false,
          "FunctionExpression": false,
          "ImportDeclaration": false,
          "ObjectExpression": false,
          "ObjectPattern": false,
          "VariableDeclaration": false,
          "NewExpression": false
        }
      }
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "consistent-this": 0,
    "eol-last": [
      2,
      "always"
    ],
    "func-call-spacing": [
      2,
      "never"
    ],
    "func-name-matching": 0,
    "func-names": 1,
    "func-style": 0,
    "function-paren-newline": [
      2,
      "consistent"
    ],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "implicit-arrow-linebreak": [
      2,
      "beside"
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "ignoreComments": false
      }
    ],
    "jsx-quotes": 0,
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "line-comment-position": 0,
    "linebreak-style": [
      2,
      "unix"
    ],
    "lines-around-comment": 0,
    "lines-between-class-members": [
      2,
      "always",
      {
        "exceptAfterSingleLine": false
      }
    ],
    "max-depth": 0,
    "max-len": [
      2,
      100,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "max-lines": 0,
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "max-statements-per-line": 0,
    "multiline-comment-style": 0,
    "multiline-ternary": 0,
    "new-cap": [
      2,
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List"
        ]
      }
    ],
    "new-parens": 2,
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-operators": [
      2,
      {
        "groups": [
          [
            "%",
            "**"
          ],
          [
            "%",
            "+"
          ],
          [
            "%",
            "-"
          ],
          [
            "%",
            "*"
          ],
          [
            "%",
            "/"
          ],
          [
            "**",
            "+"
          ],
          [
            "**",
            "-"
          ],
          [
            "**",
            "*"
          ],
          [
            "**",
            "/"
          ],
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-multi-assign": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2,
        "maxEOF": 0
      }
    ],
    "no-negated-condition": 0,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-plusplus": 2,
    "no-restricted-syntax": [
      2,
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-tabs": 2,
    "no-ternary": 0,
    "no-trailing-spaces": [
      2,
      {
        "skipBlankLines": false,
        "ignoreComments": false
      }
    ],
    "no-underscore-dangle": [
      2,
      {
        "allow": [],
        "allowAfterThis": false,
        "allowAfterSuper": false,
        "enforceInMethodNames": false
      }
    ],
    "no-unneeded-ternary": [
      2,
      {
        "defaultAssignment": false
      }
    ],
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": [
      2,
      "beside",
      {
        "overrides": {}
      }
    ],
    "object-curly-newline": [
      2,
      {
        "ObjectExpression": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ImportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "object-curly-spacing": [
      2,
      "always"
    ],
    "object-property-newline": [
      2,
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "one-var": [
      2,
      "never"
    ],
    "one-var-declaration-per-line": [
      2,
      "always"
    ],
    "operator-assignment": [
      2,
      "always"
    ],
    "operator-linebreak": [
      2,
      "before",
      {
        "overrides": {
          "=": "none"
        }
      }
    ],
    "padded-blocks": [
      2,
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      }
    ],
    "padding-line-between-statements": 0,
    "quote-props": [
      2,
      "as-needed",
      {
        "keywords": false,
        "unnecessary": true,
        "numbers": false
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true
      }
    ],
    "require-jsdoc": 0,
    "semi": [
      2,
      "always"
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": [
      2,
      "last"
    ],
    "sort-keys": 0,
    "sort-vars": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false,
        "overrides": {}
      }
    ],
    "spaced-comment": [
      2,
      "always",
      {
        "line": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!"
          ]
        },
        "block": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!"
          ],
          "balanced": true
        }
      }
    ],
    "switch-colon-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "template-tag-spacing": [
      2,
      "never"
    ],
    "unicode-bom": [
      2,
      "never"
    ],
    "wrap-regex": 0,
    "no-delete-var": 2,
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-mixed-spaces-and-tabs": 2
  }
}