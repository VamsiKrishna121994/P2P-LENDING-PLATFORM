import React from 'react';
import Layout from '../components/Layout'; // Ensure this file exists at 'src/components/Layout.tsx' or adjust the path accordingly.

export default function Overview() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p>This is the overview page where you can see a summary of your financial activities.</p>
      </div>
    </Layout>
  );
}