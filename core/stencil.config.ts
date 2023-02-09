import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { components as ionComponents } from '@ionic/core/dist/docs.json';
import { components as raulComponents } from '@realpage/raul3/collection/docs.json';

const excludeComponents = [
  ...ionComponents.map(c => c.tag),
  ...raulComponents.map(c => c.tag),
  'ion-icon',
  'ion-picker-column',
  'ion-picker-column-internal',
  'ion-picker-internal',
  'ion-select-popover',
];

export const config: Config = {
  namespace: 'vbaitacb',
  autoprefixCss: true,
  plugins: [sass()],
  globalScript: 'src/global/index.ts',
  globalStyle: 'src/css/main.scss',
  buildEs5: 'prod',
  bundles: [{ components: ['my-component'] }],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@vbaitacb/core',
      proxiesFile: '../packages/react/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents,
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
