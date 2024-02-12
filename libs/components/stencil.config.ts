import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-angular-nx',
  outputTargets: [
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
    angularOutputTarget({
      componentCorePackage: '@stencil-angular-nx/components',
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
