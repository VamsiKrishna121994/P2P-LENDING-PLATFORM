# Peer-to-Peer Lending Platform

## Overview
This project is a Peer-to-Peer (P2P) Lending Platform built with Next.js. It allows users to create loan requests, fund existing loans, and manage repayments. The platform simulates a database for storing loan details and transactions.

## Features
- **Loan Creation**: Users can submit new loan requests through a user-friendly form.
- **Loan Funding**: Users can view active loans and fund them.
- **Loan Repayment**: Users can repay their loans and track transaction history.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Project Structure
```
p2p-lending-platform
├── src
│   ├── pages
│   │   ├── api
│   │   │   ├── loans
│   │   │   │   ├── create.ts
│   │   │   │   ├── fund.ts
│   │   │   │   └── repay.ts
│   │   │   └── index.ts
│   │   ├── index.tsx
│   │   ├── loan-details.tsx
│   │   └── new-loan.tsx
│   ├── components
│   │   ├── LoanForm.tsx
│   │   ├── LoanList.tsx
│   │   └── Navbar.tsx
│   ├── lib
│   │   └── db.ts
│   ├── styles
│   │   ├── globals.css
│   │   └── LoanForm.module.css
│   └── types
│       └── loan.ts
├── public
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd p2p-lending-platform
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## API Endpoints
- **POST /api/loans/create**: Create a new loan request.
- **POST /api/loans/fund**: Fund an existing loan.
- **POST /api/loans/repay**: Repay a loan.

## Technologies Used
- Next.js
- TypeScript
- CSS Modules
- In-memory data simulation

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.