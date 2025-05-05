import React, { useEffect, useState } from 'react';
import { Loan } from '../types/loan';

const LoanList: React.FC = () => {
    const [loans, setLoans] = useState<Loan[]>([]);

    useEffect(() => {
        const fetchLoans = async () => {
            const response = await fetch('/api/loans');
            const data = await response.json();
            setLoans(data);
        };

        fetchLoans();
    }, []);

    return (
        <div>
            <h2>Active Loans</h2>
            <ul>
                {loans.map((loan) => (
                    <li key={loan.id}>
                        <h3>Loan Amount: ${loan.amount}</h3>
                        <p>Status: {loan.status}</p>
                        <p>Borrower: {loan.borrower}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoanList;