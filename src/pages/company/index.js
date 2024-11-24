import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('https://673736a9aafa2ef222330e54.mockapi.io/company')
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Company List</h1>
      <ul className="space-y-2">
        {companies.map((company) => (
          <li key={company.id}>
            <Link href={`/company/${company.id}`}>
              <div className="text-blue-600 hover:underline">{company.companyName}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
