import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
import MarketNewsFeed from './MarketNewsFeed';
import StockSummaryList from './StockSummaryList';
import MarketTicker from './MarketTicker';
import StockSearchTiingoComponent from  './StockSearchTiingoComponent';

const Home = () => {
  const [stockData, setStockData] = useState([]);

  const apiKey = 'SF6UH88CL3UM7VXA'; // Replace with your actual API key
  const apiKeyNews = '8d817453-4629-4de5-a13d-3e9130fbd020';
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Replace 'AAPL' with your dynamic stock symbols if needed
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${apiKey}`);
        const stockData = response.data['Time Series (Daily)']; // Adjust based on actual API response format
        const latestDate = Object.keys(stockData)[0];
        const latestData = stockData[latestDate];
        setStockData([{
          symbol: 'AAPL',
          name: 'Apple Inc.',
          price: latestData['4. close'], // Adjust these keys based on API response
          change: `${(latestData['4. close'] - latestData['1. open'])?.toFixed(2)} (${((latestData['4. close'] - latestData['1. open']) / latestData['1. open'] * 100)?.toFixed(2)}%)`,
        }]);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    
    fetchStockData();
  }, []);


  return (
    <Box boxShadow="lg" bg={bgColor} minH="100vh" p={5}>
      <MarketTicker tickerData={[{
        label: 'AAPL',
        value: stockData.length > 0 ? stockData[0].price : 'Loading...',
        change: stockData.length > 0 ? stockData[0].change : 'Loading...',
        isPositive: stockData.length > 0 && parseFloat(stockData[0].change) >= 0,
      }]} />
      
       <StockSearchTiingoComponent   />
       
    </Box>
  );
};

export default Home;
