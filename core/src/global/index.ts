import '@realpage/raul3';
import '@ionic/core';

export const initialize = () => {
  if (typeof (window as any) === 'undefined') {
    return;
  }
};

export default initialize;
