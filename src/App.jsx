import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const Cover = lazy(() => import("./component/Cover"));
const HalUndangan = lazy(() => import("./component/HalUndangan"));

function App() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/:id" element={<Cover />} />
      <Route path="/:id/aninvitation" element={<HalUndangan />} />
    </Routes>
    // </Suspense>
  );
}

export default App;
