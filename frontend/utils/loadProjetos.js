export async function loadProjetos() {
    const projetosFetch = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/numero-projeto`);
    const projetos = await projetosFetch.json();

    return projetos.data.attributes;
}

