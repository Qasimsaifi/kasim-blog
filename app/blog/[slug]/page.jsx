import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import { Suspense } from "react";
import SingleBlog from "@/app/components/SingleBlog";
import Loading from "@/app/components/Loading";

export default async function Page({ params }) {
  return (

    <main className="bg-gray-100 dark:bg-gray-900">
      <head>
        <title>{params.slug}</title>
      </head>
      <Navbar />
    <Suspense fallback={<Loading/>}>
      <SingleBlog slug={params.slug}/>
      </Suspense>
    </main>
  );
}
