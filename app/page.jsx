import Image from "next/image";
import Navbar from "./components/Navbar";
import BlogsPage from "./components/BlogPosts";
import { Suspense } from "react";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <>
<Navbar/>
    <Suspense fallback={<Loading/>}>
      <BlogsPage/>
    </Suspense>
    </>
  );
}
