export async function loadMainPosts() {
    const mainPostFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/publicacao-destaque?populate[publicacao][populate][0]=foto&populate[publicacao][populate][1]=categorias'`
    );
    const mainPost = await mainPostFetch.json();
    
    return mainPost.data.attributes;
}
