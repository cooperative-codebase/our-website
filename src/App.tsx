import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CooperativeCodebasePage from "@/app/page";
import ContactPage from "@/app/contact/page";
import VerifyPage from "@/app/verify/page";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CooperativeCodebasePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
