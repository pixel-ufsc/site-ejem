export async function loadMembros() {
    const membrosFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/membros?populate=foto`
    );
    const membros = await membrosFetch.json();
    
    return membros;
}
