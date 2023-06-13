import React from "react";
import RootProvider from "./core/providers/RootProvider";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/appRouter";

const App = () => {
  return (
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
  );
};

export default App;
