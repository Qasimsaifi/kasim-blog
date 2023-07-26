import { Suspense } from "react";
import LatestBlogPost from "@/components/LatestBlogPosts";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Blogicco World: Discovering Life's Marvels and Insights",
  description:
    "Welcome to Blogicco Blog - A place for insightful articles and blog posts.",
};
export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <div className=" mb-4 flex justify-center " id="latest">
        <h1 className="mt-20 text-5xl font-bold pb-2 text-purple-600 border-b-4 border-purple-600 border-spacing-48 inline">
          Latest Blogs
        </h1>
      </div>

      <Suspense fallback={<Loading />}>
        <main>
          <LatestBlogPost />
        </main>
      </Suspense>
      <Footer />
    </main>
  );
}
