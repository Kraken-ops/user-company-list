
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-6">Welcome to the User-Company App</h1>
      <div className="space-x-4">
        <Link href="/user">
          <div className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            User List
          </div>
        </Link>
        <Link href="/company">
          <div className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Company List
          </div>
        </Link>
      </div>
    </div>
  );
}
