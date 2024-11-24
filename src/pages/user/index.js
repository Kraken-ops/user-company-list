import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://673736a9aafa2ef222330e54.mockapi.io/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>User List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: '10px 0' }}>
            <Link href={`/user/${user.id}`}>
              <div style={{ textDecoration: 'none', color: 'blue' }}>{user.name}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button style={{ marginTop: '20px' }}>Back to Home</button>
      </Link>
    </div>
  );
}