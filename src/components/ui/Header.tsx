export default function Header() {
  return (
    <section className="my-5">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-bold">
          <a href="/">PORTFOLIO</a>
        </h1>
        <ul className="w-full flex justify-end gap-3">
          <li>
            <a className="header-link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="header-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header-link" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="header-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
