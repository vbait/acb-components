import '@ionic/core';
import '@realpage/raul3';

export const initialize = () => {
  if (typeof (window as any) === 'undefined') {
    return;
  }
  console.log('RUN VBAIT CORE');
};

export default initialize;
