import { useEffect, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const useEndpoint = (endpoint = '/') => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState('');

    useEffect(() => {
        fetch(`${API_URL}${endpoint}`)
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error);
                setdata(data);
                setloading(false);
            });
    }, [endpoint]);

    return { data, loading, error };
};

export default useEndpoint;
