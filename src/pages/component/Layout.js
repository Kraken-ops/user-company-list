import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <div>
      {!isHomePage && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          {/* <button onClick={() => router.push('/')} style={{ padding: '5px 10px' }}>
            Home
          </button>
          <button onClick={() => router.back()} style={{ padding: '5px 10px' }}>
            Back
          </button> */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
