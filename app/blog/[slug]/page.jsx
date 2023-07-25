import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import SingleBlog from "@/components/SingleBlog";
import { Suspense } from "react";

export default async function Page({ params }) {
  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <head>
        <title>{params.slug}</title>
      </head>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <SingleBlog slug={params.slug} />
      </Suspense>
    </main>
  );
}
