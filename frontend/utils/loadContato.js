export async function loadContato() {
    const contatoFetch = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/contato`);
    const contato = await contatoFetch.json();

    return contato.data.attributes;
}

