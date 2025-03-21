import Link from "next/link";

export default function Header() {
  return (
    <section className="my-5">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-bold">
          <a href="/">PORTFOLIO</a>
        </h1>
        <ul className="w-full flex justify-end gap-3">
          <li>
            <Link className="header-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="header-link" href="/experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className="header-link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
