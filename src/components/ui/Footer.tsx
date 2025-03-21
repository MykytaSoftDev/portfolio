import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-5">
      <p className="font-medium">Copyright © 2025</p>
      <ul className="flex gap-2">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/nick-nazarenko/">
            <Linkedin />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/MykytaSoftDev">
            <Github />
          </a>
        </li>
      </ul>
    </footer>
  );
}
