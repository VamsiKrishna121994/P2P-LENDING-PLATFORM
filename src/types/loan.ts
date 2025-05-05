export interface LoanRequest {
    id: string;
    borrower: string;
    amount: number;
    interestRate: number;
    term: number; // in months
    status: 'pending' | 'funded' | 'repaid';
    createdAt: Date;
}

export interface LoanTransaction {
    loanId: string;
    amount: number;
    transactionType: 'fund' | 'repay';
    date: Date;
}