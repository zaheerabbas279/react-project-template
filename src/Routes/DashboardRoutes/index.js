import React from "react";
import { RouterStrings } from "../routeStrings";
import { Routes, Route } from "react-router-dom";
import { ComponentOne } from "../../pages/componentOne";
import { ComponentTwo } from "../../pages/componentTwo";

export const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path={RouterStrings.home}
          element={<ComponentOne name="test" />}
        />
        <Route path={RouterStrings.newpage} element={<ComponentTwo />} />
      </Routes>
    </div>
  );
};
