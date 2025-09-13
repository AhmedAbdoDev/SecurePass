import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SecurePass
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://ahmedabdodev.github.io/Portfolio"
                className="text-gray-600 hover:text-blue-500 font-medium"
                target="_blank"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
