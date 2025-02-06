import { Navigate, Route, Routes } from "react-router";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { LoginPage } from "../auth/LoginPage";
import { DcPage } from "../heroes/pages/DCPage";
import { Navbar } from "../ui/components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/marvel" />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
