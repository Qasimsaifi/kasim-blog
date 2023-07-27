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
    // console.log(data.results);
    // Assuming the API returns an array of blog objects
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export default async function sitemap() {
  const baseUrl = "https://nextjs13-seo.vercel.app";

  // Get All Posts from CMS
  const postsData = await fetchBlogs();
  const posts = postsData.results
 
  const postsUrls =
    posts?.map((post) => {
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
  ];
}
