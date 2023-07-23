
async function fetchBlogs() {
  try {
    const response = await fetch(
      "https://backend.kasimsaifi.tech/api/v1/portfolio/blog/",
      {
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

  async function sayHellow(params) {
    "use server";
    console.log(params);
  }

  return (
    <>
    <div className="flex justify-center items-center bg-black py-12 text-white">
      <div className="w-full px-4 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.isArray(blogs) ? (
          blogs.map((blog) => (
            <div key={blog.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={`https://res.cloudinary.com/dehpkgdw5/${blog.image}`}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.category}
                  </h5>
                </a>
                <p className="mb-3 text-gray-700 dark:text-gray-400">
                  {blog.title}
                </p>
                <a
                  href={`blog/${blog.slug}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
