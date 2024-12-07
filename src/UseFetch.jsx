import { useEffect, useState } from 'react';

function UseFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); // State for storing error messages
    const [isLoading, setIsLoading] = useState(true); // State for loading status

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                // Check if the response is not OK
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message); // Set the error message if there's an error
            } finally {
                setIsLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchData();
    }, [url]);

    return { data, error, isLoading }; // Return error and loading state
}

export default UseFetch;
