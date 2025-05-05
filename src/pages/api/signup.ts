import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, verificationCode } = req.body;
    console.log(`Signup request for ${email} with code ${verificationCode}`);
    res.status(200).json({ message: 'Signup successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}