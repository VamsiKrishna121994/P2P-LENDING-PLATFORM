export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { loanId, amount } = req.body;

        // Simulated database interaction
        const loan = await db.getLoanById(loanId);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        if (loan.status !== 'funded') {
            return res.status(400).json({ message: 'Loan is not in a repayable state' });
        }

        // Update loan status and transaction history
        loan.amountPaid += amount;
        if (loan.amountPaid >= loan.amount) {
            loan.status = 'repaid';
        }

        await db.updateLoan(loan);

        return res.status(200).json({ message: 'Repayment successful', loan });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}