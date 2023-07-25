import Head from "next/head";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { Suspense } from "react";


const fetchData = async (slug) => {
  const API_URL = "https://backend.kasimsaifi.tech/api/v1";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTg3Nzg4LCJpYXQiOjE2ODgyMzA5ODgsImp0aSI6IjI4N2QwNTNmYWIyYjQwOTQ4OGVkOTc5ZGU4OTJkOTE2IiwidXNlcl9pZCI6MX0.QtMmMX8pju2nulQkjlw4MoSWi0bTTZfxRqkVTqlCmrk"; // Replace this with your actual bearer token

  try {
    const response = await fetch(`${API_URL}/portfolio/blog/?slug=${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const codeBlockRegex = /<code class="language-(.*?)">([\s\S]*?)<\/code>/g;

function processCodeBlocks(content) {
  return content.replace(codeBlockRegex, (_, language, code) => {
    const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
    return `<pre class="language-${language}"><code class="language-${language}">${highlightedCode}</code></pre>`;
  });
}

export default async function SingleBlog({ slug }) {
  const blog = await fetchData(slug);
  // console.log(blog);
  const processedContent = blog ? processCodeBlocks(blog.content) : "";

  return (

    <>
      <Head>
        <title>Blog - {blog.title}</title>
        <meta name="description" content={blog.content} />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 mt-14 lg:px-8 py-8 text-white lg:w-8/12">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img
          className="w-full rounded-lg mb-4"
          src={`https://res.cloudinary.com/dehpkgdw5/${blog.image}`}
          alt=""
        />
        <div
          className="prose" // Use 'prose' or any other class to style the blog content (adjust as needed)
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
        <div className="mt-4 flex flex-row items-center">
          <p className="mr-2 text-gray-400">Author: {blog.author}</p>
          <p className="text-gray-400">Category: {blog.category}</p>
        </div>
      </div>
    </>
  );
}