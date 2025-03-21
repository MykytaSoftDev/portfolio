import Link from "next/link";

export function Home() {
  return (
    <div className="flex flex-col justify-center ml-5">
      <h3 className="text-5xl font-bold mb-5">NICK NAZARENKO</h3>
      <span className="line inline-block w-[70px] h-[5px] bg-[#333] mb-5"></span>
      <h3 className="job text-[25px] mb-5 font-light">
        <b>Full Stack Software Engineer</b>
      </h3>
      <div className="contact_button">
        <Link href="/contact">Get in Touch</Link>
      </div>
    </div>
  );
}
