export async function getSortedPostsData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/portfolio/blog/?is_published=true&ordering=-created_at&page=1&page_size=6`,
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

    const posts = await response.json();
    console.log(posts);

    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Instead of just logging the error, you might want to handle it further or rethrow it.
    // If you want the calling code to handle the error, you can rethrow it like this:
    throw error;
  }
}