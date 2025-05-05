import React from 'react';
import Layout from '../components/Layout';
import LoanCalculator from '../components/LoanCalculator';
import CurrencyConverter from '../components/CurrencyConverter';

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LoanCalculator />
          <CurrencyConverter />
        </div>
      </div>
    </Layout>
  );
}