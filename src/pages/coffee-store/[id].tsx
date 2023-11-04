import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const CoffeeID = () => {
  const router = useRouter();

  return (
    <div>
      CoffeeID {router.query.id}
      <div>
        <Link href="/">Back To Home Page</Link>
      </div>
    </div>
  );
};

export default CoffeeID;
