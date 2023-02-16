import { defineCustomElements } from '../loader';
import { defineCustomElements as defineRaulElements } from '@realpage/raul3/loader';
import { defineCustomElements as defineIonElements } from '@ionic/core/loader';

defineRaulElements();
defineIonElements();
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
