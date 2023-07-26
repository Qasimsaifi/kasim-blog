import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import SingleBlog from "@/components/SingleBlog";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import BlogLoading from "@/components/BlogLoading";

export default async function Page({ params }) {
  return (
    <>
    <head>
        <title>{params.slug}</title>
      </head>
      <body className='bg-gray-100 dark:bg-gray-900'>
        
      
      <Suspense fallback={<BlogLoading />}>
        <SingleBlog slug={params.slug} />

      </Suspense>
      </body>
    </>
  );
}
