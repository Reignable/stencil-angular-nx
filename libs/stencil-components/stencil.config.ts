import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-angular-nx',
  outputTargets: [
    {
      type: 'dist',
      dir: '../../dist/stencil-components',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    { type: 'www', serviceWorker: null, dir: '../../dist/stencil-components' },
    angularOutputTarget({
      componentCorePackage: '@stencil-angular-nx/stencil-components',
      outputType: 'component',
      directivesProxyFile:
        '../angular-components/src/lib/generated/components.ts',
      directivesArrayFile: '../angular-components/src/lib/generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
