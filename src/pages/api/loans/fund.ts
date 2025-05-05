export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { loanId, amount } = req.body;

        // Simulated database interaction
        const db = require('../../../lib/db');
        const loan = db.getLoanById(loanId);

        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        if (loan.status !== 'pending') {
            return res.status(400).json({ message: 'Loan is not available for funding' });
        }

        loan.fundedAmount += amount;
        loan.status = loan.fundedAmount >= loan.amount ? 'funded' : 'partially funded';

        db.updateLoan(loanId, loan);

        return res.status(200).json({ message: 'Loan funded successfully', loan });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}