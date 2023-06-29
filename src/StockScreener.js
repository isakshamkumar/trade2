import React from 'react';
import StockScreenerImage from './stock.png';

const StockScreener = () => {
    const openStockScreener = () => {
        window.open('https://www.tradingview.com/widget/screener/', '_blank');
      };
  return (
    <div className="stock-screener">
      <img onClick={openStockScreener} src={StockScreenerImage} alt="Stock Screener" />
    </div>
  );
};

export default StockScreener;
