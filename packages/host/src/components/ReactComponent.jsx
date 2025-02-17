import React, {lazy, Suspense } from "react";

import MicroFrontendB from "//localhost:7100/bundle.js";

const Hello = lazy(() => import("//localhost:7200/bundle.js"));

const ReactComponent = () => (
  <>
      <Suspense fallback={<div>Loading...</div>}>
          <Hello />
      </Suspense>
    <MicroFrontendB />
  </>
);

export default ReactComponent;
