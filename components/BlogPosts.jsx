import Image from "next/image";
import Link from "next/link";



async function fetchBlogs() {
  try {
    const response = await fetch(
      ` ${process.env.NEXT_PUBLIC_API_URL}/portfolio/blog/?is_published=true&ordering=-created_at`,
      {
        cache: "no-cache",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTg3Nzg4LCJpYXQiOjE2ODgyMzA5ODgsImp0aSI6IjI4N2QwNTNmYWIyYjQwOTQ4OGVkOTc5ZGU4OTJkOTE2IiwidXNlcl9pZCI6MX0.QtMmMX8pju2nulQkjlw4MoSWi0bTTZfxRqkVTqlCmrk",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // Assuming the API returns an array of blog objects
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function BlogsPage() {
  const blogsData = await fetchBlogs();
  const blogs = blogsData.results;
  // console.log(blogs[0]);
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return (
    <>
<div className="flex justify-center items-center py-12 mt-8 ">
  <div className="w-full px-4 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-8">
    {Array.isArray(blogs) ? (
      blogs.map((blog) => (
        <div key={blog.slug} className="blog-card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex flex-col h-full border-double border-4 border-gray-700 p-2">
          <Link href={`/blog/${blog.slug}`}>
            {blog.image ? (
              <Image
                className="card-image border-double border-4 border-gray-700 p-1"
                src={`https://res.cloudinary.com/dehpkgdw5/${blog.image}`}
                alt=""
                width={500}
                height={100}
              />
            ) : (
              <img
                className="card-image"
                src="/no-image.png"
                alt="Default Image"
                width={500}
                height="50px"
              />
            )}
          </Link>
          <div className="flex flex-col justify-between flex-grow">
            <Link href={`/blog/${blog.slug}`}>
              <p className="card-title">{blog.title}</p>
            </Link>
            <p className="blog-footer mt-4 pb-2">
              Written by <span className="by-name">{blog.author}</span> on{" "}
              <span className="date">{formatDate(blog.created_at)}</span>
            </p>
          </div>
        </div>
      ))
    ) : (
      <p>No blogs to display.</p>
    )}
  </div>
</div>
    </>
  );
}

export default BlogsPage;