// src/App.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import WeatherWidget from "./components/WeatherWidget";
import FinanceWidget from "./components/FinanceWidget";
import Footer from "./components/Footer";
import Home from './components/Home';
import StockChart from './components/StockChart';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/finance" element={<FinanceWidget />} />
        <Route path="/weather" element={<WeatherWidget />} />
        <Route path="/stock-chart" element={<StockChart symbol="AAPL" />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;