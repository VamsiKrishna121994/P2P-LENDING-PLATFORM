import React, { useState } from 'react';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [error, setError] = useState('');

  // Predefined exchange rates
  const exchangeRates: { [key: string]: number } = {
    USD_INR: 82.5,
    INR_USD: 0.012,
    USD_EUR: 0.85,
    EUR_USD: 1.18,
    INR_EUR: 0.011,
    EUR_INR: 90.0,
  };

  const handleConvert = () => {
    setError('');
    const conversionKey = `${fromCurrency}_${toCurrency}`;
    const rate = exchangeRates[conversionKey];

    if (rate) {
      setConvertedAmount(amount * rate);
    } else {
      setError('Conversion rate not available for the selected currencies.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fromCurrency" className="block text-gray-700 mb-2">From Currency</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="toCurrency" className="block text-gray-700 mb-2">To Currency</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {convertedAmount !== null && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">
            Converted Amount: {toCurrency} {convertedAmount.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}