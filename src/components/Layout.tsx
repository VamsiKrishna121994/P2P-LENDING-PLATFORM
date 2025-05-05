import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex space-x-8">
            <Link href="/dashboard" className="text-gray-900 hover:text-blue-500">
              Dashboard
            </Link>
            <Link href="/loan-form" className="text-gray-900 hover:text-blue-500">
              Loan Form
            </Link>
            <Link href="/transactions" className="text-gray-900 hover:text-blue-500">
              Transactions
            </Link>
            <Link href="/eligibility" className="text-gray-900 hover:text-blue-500">
              Eligibility Check
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-gray-100 text-center py-4 mt-8">
        <p className="text-sm text-gray-600">© 2025 P2P Lending Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}