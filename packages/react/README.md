# React wrappers for core components

## How to use it

```bash
npm i @vbait/react
```

if there are peer dependencies (for example **RAUL** and **Ionic**):

```bash
npm i @ionic/core
npm i @realpage/raul3
```

```tsx
// index.tsx
import { createRoot } from "react-dom/client";
import { defineCustomElements as defineIonCustomElements } from "@ionic/core/loader";
import { initialize } from "@ionic/core/components";
import { defineCustomElements as defineRaulCustomElements } from "@realpage/raul3/loader";
import App from "./App";

initialize();
defineIonCustomElements(window);
defineRaulCustomElements(window);

export const APP_HTML_ELEMENT: HTMLElement =
  document.getElementById("acb-portal-app")!;

const root = createRoot(APP_HTML_ELEMENT);
root.render(<App />);
```

```tsx
// App.tsx
import { FC } from "react";
import { MyComponent } from "@vbait/react";

const App: FC = () => {
  return <MyComponent />;
};
```
