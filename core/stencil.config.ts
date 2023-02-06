import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'acb-components',
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@vbait/components-core',
      proxiesFile: '../packages/react/src/components.ts',
      includeDefineCustomElements: true,
      excludeComponents: [],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
