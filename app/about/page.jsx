import AboutPage from "@/components/AboutPage";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";

import Loading from "@/components/Loading";
const About = () => {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <AboutPage />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default About;
