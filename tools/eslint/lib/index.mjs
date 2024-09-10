// @ts-check
import { antfu } from '@antfu/eslint-config'

/** @param {import('eslint').Linter.Config[]} config */
export function withESLint(...config) {
  return antfu(
    {
      type: 'lib',

      vue: true,
      gitignore: true,
      stylistic: true,
      typescript: true,

      formatters: {
        css: true,
        html: true,
        markdown: 'prettier',
      },
    },
    ...config,
  )
}
