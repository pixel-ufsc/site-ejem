const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const fetchData = async (endpoint = '/') => {
    const res = await fetch(`${API_URL}${endpoint}`);
    const data = await res.json();
    return data;
};

export default fetchData;
