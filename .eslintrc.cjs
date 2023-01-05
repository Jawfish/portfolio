module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'next/core-web-vitals',
		'prettier'
	],
	plugins: ['tailwindcss', 'react', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'no-var': 'error',
		'no-console': 'warn',
		'object-shorthand': 'error',
		'prefer-const': 'error',
		'prefer-template': 'error',
		'prefer-destructuring': 'warn',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react/jsx-props-no-spreading': 1,
		yoda: 'error',
		'prettier/prettier': [
			'warn',
			{
				arrowParens: 'avoid',
				bracketSameLine: true,
				bracketSpacing: true,
				embeddedLanguageFormatting: 'auto',
				endOfLine: 'lf',
				htmlWhitespaceSensitivity: 'css',
				insertPragma: false,
				printWidth: 80,
				proseWrap: 'preserve',
				quoteProps: 'as-needed',
				requirePragma: false,
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'none',
				useTabs: true
			}
		],
		'tailwindcss/enforces-negative-arbitrary-values': 'warn'
	}
};
