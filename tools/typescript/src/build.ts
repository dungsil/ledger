import { defineBuildConfig } from 'unbuild'
import type { BuildConfig } from 'unbuild'

export function withBuild(): BuildConfig {
  return defineBuildConfig([
    {
      entries: ['src/index'],

      outDir: 'dist',
      declaration: 'node16',
    },
  ])
}
