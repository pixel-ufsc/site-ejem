export async function loadDepoimentos() {
    const depoimentosFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/depoimentos?populate=%2A`
    );
    const depoimentos = await depoimentosFetch.json();
    
    return depoimentos;
}
