import React from 'react';
import Layout from '../components/Layout';

export default function NewLoan() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Create a New Loan</h1>
        <p>Fill out the form below to create a new loan request.</p>
      </div>
    </Layout>
  );
}