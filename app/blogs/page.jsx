import Navbar from "../components/Navbar";
import { Suspense } from "react";
import Loading from "../components/Loading";
import BlogsPage from "../components/BlogPosts";


export const metadata = {
  title: "Ink Tales: Kasim's Friendly Musings on All Things Wonderful and Ordinary ",
  description: "Welcome to Kasim's Blog - A place for insightful articles and blog posts.",
};

async function Blogs() {

  return (
    <>
    <Navbar/>
    <Suspense fallback={<Loading/>}>
      <BlogsPage/>
    </Suspense>
    
          </>
  );
}

export default Blogs;
