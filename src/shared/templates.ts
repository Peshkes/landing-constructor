const BASE_URL = import.meta.env.VITE_API_URL;

export const sendRequest = async <D, R>(
    endpoint: string,
    method: string = 'GET',
    data?: D,
    signal?: AbortSignal
): Promise<R> => {
    return fetch(`${BASE_URL}/${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : undefined,
        signal,
    })
        .then(async (response) => {
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
            }
            return response.json();
        })
        .catch((error) => {
            if (error.name === 'AbortError') {
                console.error(`Request to ${endpoint} was aborted`);
            } else {
                console.error(`Error ${method} ${endpoint}:`, error);
            }
            throw error;
        });
};

export const getRandomImageURL = () => {
    return `https://picsum.photos/800/600?random=${Math.random()}`;
}
