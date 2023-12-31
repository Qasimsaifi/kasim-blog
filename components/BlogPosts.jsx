import { BlogCard } from "./ui/Cards";

async function fetchBlogs() {
  try {
    const response = await fetch(
      ` ${process.env.NEXT_PUBLIC_API_URL}/portfolio/blog/?is_published=true&ordering=-created_at`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
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
    <main className="min-h-screen">
      <div className="flex justify-center items-center py-12">
        <div className="mt-14 w-full px-4 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-11/12 xl:grid-cols-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 ">
          {Array.isArray(blogs) ? (
            blogs.map((blog) => (
              <>
                <BlogCard blog={blog} />
              </>
            ))
          ) : (
            <p>No blogs to display.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default BlogsPage;
