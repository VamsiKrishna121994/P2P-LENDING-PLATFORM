import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log(`Login request for ${email}`);
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}