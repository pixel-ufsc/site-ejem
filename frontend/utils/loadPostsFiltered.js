export async function loadPostsFiltered({ slug }) {
    const postsFilteredFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?filters[slug][$eq]=${slug}&populate=%2A`
    );
    const postsFiltered = await postsFilteredFetch.json();
    
    return postsFiltered;
}
