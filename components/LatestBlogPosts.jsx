import Image from "next/image";
import Link from "next/link";

async function fetchBlogs() {
  try {
    const response = await fetch(
      ` ${process.env.NEXT_PUBLIC_API_URL}/portfolio/blog/?is_published=true&ordering=-created_at&page=1&page_size=6`,
      {
        cache: "no-cache",
        headers: {
          Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
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

async function LatestBlogPost() {
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
    <main className="min-h-screen">

      <div className="flex justify-center items-center py-12  ">
        <div className="w-full px-4 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-11/12 xl:grid-cols-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 ">
          {Array.isArray(blogs) ? (
            blogs.map((blog) => (
              <div
                key={blog.slug}
                className="blog-card bg-gray-200 dark:bg-gray-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex flex-col h-full border-double border-4 border-gray-700 p-2"
              >
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
    </main>
  );
}

export default LatestBlogPost;
