import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { components as ionComponents } from '@ionic/core/dist/docs.json';
// import { components as ionComponents } from '@realpage/raul3/docs.json';

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
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: ionComponents.map(c => c.tag).concat(['ion-icon', 'ion-picker-column', 'ion-picker-column-internal', 'ion-picker-internal', 'ion-select-popover']),
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    {
      type: 'docs-json',
      file: '../docs/core.json',
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
