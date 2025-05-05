import { NextApiRequest, NextApiResponse } from 'next';
import { LoanRequest } from '../../../types/loan';
import { db } from '../../../lib/db';

export default async function createLoan(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const loanRequest: LoanRequest = req.body;

    // Basic validation
    if (!loanRequest.amount || !loanRequest.term || !loanRequest.interestRate) {
        return res.status(400).json({ message: 'Missing required loan details' });
    }

    // Store the loan in the simulated database
    const newLoan = await db.createLoan(loanRequest);

    return res.status(201).json(newLoan);
}