import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'acb-components',
  autoprefixCss: true,
  plugins: [sass()],
  globalScript: 'src/global/index.ts',
  // globalStyle: 'src/global/index.ts',
  buildEs5: 'prod',
  bundles: [{ components: ['my-component'] }],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@vbait/components-core',
      proxiesFile: '../packages/react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
      excludeComponents: [],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      // dir: 'components',
      // copy: [
      //   {
      //     src: '../scripts/custom-elements',
      //     dest: 'components',
      //     warn: true,
      //   },
      // ],
      // includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
