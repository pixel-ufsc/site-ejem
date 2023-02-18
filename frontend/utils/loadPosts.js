export async function loadPosts() {
    const postsFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=%2A`
    );
    const posts = await postsFetch.json();
    
    return posts.data;
}
