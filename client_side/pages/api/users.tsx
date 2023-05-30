
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    // Assuming the user data is stored in the session object
    const userData = session.user;

    res.status(200).json(userData);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

