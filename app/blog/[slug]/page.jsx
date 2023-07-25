import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import { Suspense } from "react";
import SingleBlog from "@/app/components/SingleBlog";
import Loading from "@/app/components/Loading";
import { SingleBlogHead } from "@/app/components/SingleBlog";

export default async function Page({ params }) {
  return (

    <>
      <head>
        <title>{params.slug}</title>
      </head>
      <Navbar />
    <Suspense fallback={<Loading/>}>
      <SingleBlog slug={params.slug}/>
      </Suspense>
    </>
  );
}
