import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8 mt-auto">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Section */}
          <div>
            <h3 className="text-white font-semibold mb-2">About Me</h3>
            <p className="text-sm leading-relaxed">
              I'm a solo developer passionate about building useful and simple
              tools. This is a personal project to help you create stronger
              passwords.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Link</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-semibold mb-2">Connect with Me</h3>
            <ul className="flex justify-center md:justify-start space-x-4 text-sm">
              <li>
                <a
                  href="https://github.com/AhmedAbdoDev"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/3bkrenoDev"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://ahmedabdodev.github.io/Portfolio"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700 text-sm">
        &copy; {new Date().getFullYear()} SecurePass. All Rights Reserved.
      </div>
    </footer>
  );
}
