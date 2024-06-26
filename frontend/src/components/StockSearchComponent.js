import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';

const StockSearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:3001/api/datasets/${query}`);
            setResults(response.data.dataset);
        } catch (err) {
            setError('Failed to fetch data. Please check the dataset code.');
            setResults(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box p={4}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} onSearch={handleSearch} />
            {loading && <Text>Loading...</Text>}
            {error && <Text color="red.500">{error}</Text>}
            {results && (
                <Box mt={4}>
                    <Text fontWeight="bold">{results.name} ({results.ticker})</Text>
                    <Text>Description: {results.description}</Text>
                </Box>
            )}
        </Box>
    );
};

export default StockSearchComponent;
