import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CompanyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [company, setCompany] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://673736a9aafa2ef222330e54.mockapi.io/company/${id}`)
        .then((response) => response.json())
        .then((data) => setCompany(data));

        fetch('https://673736a9aafa2ef222330e54.mockapi.io/users')
        .then((response) => response.json())
        .then((data) => {
          const filteredUsers = data.filter((user) => user.companyId === id);
          setUsers(filteredUsers);
        });


    }
  }, [id]);

  if (!company) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{company.companyName}</h1>
      <p className="text-lg mb-2">
        <strong>Email :</strong> {company.email}
      </p>
      <p className="text-lg mb-2">
        <strong>Mobile Number :</strong> {company.mobileNumber}
      </p>
      <p className="text-lg mb-2">
        <strong>Address :</strong> {company.address}
      </p>

      <h2 className="text-xl font-bold mb-4">Users Associated with {company.companyName}</h2>
      <ul className="space-y-2">
        {users.length === 0 ? (
          <p>No users associated with this company.</p>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>
                <div className="text-blue-600 hover:underline  items-center text-center space-x-3">
                  <span>{user.name}</span>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>

    </div>
  );
}
