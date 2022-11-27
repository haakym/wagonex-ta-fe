import { Routes, Route } from "react-router-dom";
import App from "./App";
import CityForecast from "./components/CityForecast";
import { NotFound } from "./components/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/weather/:cityId" component={<CityForecast />} />
      <Route path="*" component={<NotFound />} />
    </Routes>
  );
};
