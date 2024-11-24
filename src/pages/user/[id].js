import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://673736a9aafa2ef222330e54.mockapi.io/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>User Details</h1>
      <p><strong>Name :</strong> {user.name}</p>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Mobile Number :</strong> {user.mobileNumber}</p>
      <Link href="/user">
        <button style={{ marginTop: '20px' }}>Back to User List</button>
      </Link>
    </div>
  );
}
