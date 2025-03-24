import Link from "next/link";

export default function Header() {
  return (
    <section className="my-5 mx-15">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-bold">
          <a href="/">PORTFOLIO</a>
        </h1>
        <ul className="w-full flex justify-end gap-3">
          <li className="header-button">
            <Link href="/">Home</Link>
          </li>
          <li className="header-button">
            <Link href="/about">About</Link>
          </li>
          <li className="header-button">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="header-button">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="header-button">
            <Link href="/Nick_Nazarenko_resume.pdf">Resume</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
