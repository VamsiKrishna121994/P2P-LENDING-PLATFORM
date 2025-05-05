import React from 'react';

interface LoanFormProps {
  loanDetails: {
    amount: string;
    term: string;
    interestRate: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const LoanForm: React.FC<LoanFormProps> = ({ loanDetails, onInputChange, onSubmit, isSubmitting }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Loan Amount:
        <input
          type="number"
          name="amount"
          value={loanDetails.amount}
          onChange={onInputChange}
          required
          disabled={isSubmitting} // Disable input during submission
        />
      </label>
      <br />
      <label>
        Loan Term (in months):
        <input
          type="number"
          name="term"
          value={loanDetails.term}
          onChange={onInputChange}
          required
          disabled={isSubmitting} // Disable input during submission
        />
      </label>
      <br />
      <label>
        Interest Rate (%):
        <input
          type="number"
          name="interestRate"
          value={loanDetails.interestRate}
          onChange={onInputChange}
          required
          disabled={isSubmitting} // Disable input during submission
        />
      </label>
      <br />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Loan Request'}
      </button>
    </form>
  );
};

export default LoanForm;