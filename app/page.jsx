import Image from "next/image";
import Navbar from "./components/Navbar";
import BlogsPage from "./components/BlogPosts";
import { Suspense } from "react";
import Loading from "./components/Loading";
export const metadata = {
  title: "Blogicco World: Discovering Life's Marvels and Insights",
  description:
    "Welcome to Blogicco Blog - A place for insightful articles and blog posts.",
};
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
