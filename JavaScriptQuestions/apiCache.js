class ApiCache {
    constructor() {
        this.cache = {};
    }

    async fetchWithCache(url, options = {}) {
        // Create a unique key for each request based on URL and options
        const cacheKey = JSON.stringify({ url, options });

        // If the request is cached, return the cached response
        if (this.cache[cacheKey]) {
            console.log('Returning cached response for:', url);
            return this.cache[cacheKey];
        }

        // Make the API call and cache the response
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.cache[cacheKey] = data;
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}

// Example usage:
const apiCache = new ApiCache();

async function fetchData(url, options) {
    try {
        const data = await apiCache.fetchWithCache(url, options);
        console.log('Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
fetchData(apiUrl);
fetchData(apiUrl); // This will return the cached response
