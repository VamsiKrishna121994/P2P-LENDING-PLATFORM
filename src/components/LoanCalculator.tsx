import React, { useState } from 'react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(12);
  const [processingFee, setProcessingFee] = useState(0);
  const [prepayment, setPrepayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState<number[]>([]);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    setEmi(emi);

    // Generate EMI schedule
    const schedule = [];
    let remainingAmount = amount - prepayment;
    for (let i = 0; i < tenure; i++) {
      const interest = remainingAmount * monthlyRate;
      const principal = emi - interest;
      remainingAmount -= principal;
      schedule.push(remainingAmount > 0 ? remainingAmount : 0);
    }
    setSchedule(schedule);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Loan Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Loan Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Enter loan amount"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Enter interest rate"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Tenure (Months)</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Enter tenure in months"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Processing Fee</label>
        <input
          type="number"
          value={processingFee}
          onChange={(e) => setProcessingFee(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Enter processing fee"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Prepayment Amount</label>
        <input
          type="number"
          value={prepayment}
          onChange={(e) => setPrepayment(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Enter prepayment amount"
        />
      </div>
      <button
        onClick={calculateEMI}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calculate EMI
      </button>
      {emi > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Your EMI: ₹{emi.toFixed(2)}</h2>
          <h3 className="text-md font-bold mt-4">EMI Schedule:</h3>
          <ul className="list-disc pl-5">
            {schedule.map((remaining, index) => (
              <li key={index}>
                Month {index + 1}: ₹{remaining.toFixed(2)} remaining
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}