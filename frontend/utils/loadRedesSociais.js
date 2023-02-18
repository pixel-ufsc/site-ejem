export async function loadRedesSociais() {
    const redesSociaisFetch = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/rede-social?populate=%2A`
    );
    const redesSociais = await redesSociaisFetch.json();
    
    return redesSociais.data.attributes;
}
