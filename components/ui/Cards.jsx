import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {  
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <>
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
    </>
  );
};

function Components() {
  return <div>Components</div>;
}

export { BlogCard, Components };
