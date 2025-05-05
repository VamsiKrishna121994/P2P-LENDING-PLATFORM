import React from 'react';
import Layout from '../components/Layout'; // Ensure the file exists at this path

export default function Settings() {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p>Configure your application settings here.</p>
      </div>
    </Layout>
  );
}