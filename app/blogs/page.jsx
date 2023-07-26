import { Suspense } from "react";
import BlogsPage from "@/components/BlogPosts";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blogicco Friendly Musings on All Things Wonderful and Ordinary ",
  description:
    "Welcome to Blogicco Blog - a place for insightful articles and blog posts",
};

async function Blogs() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <BlogsPage />
        <Footer/>

      </Suspense>
    </main>
  );
}

export default Blogs;
