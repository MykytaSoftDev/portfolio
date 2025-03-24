import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[650px] py-5 px-5">
      <fieldset className="flex p-4 mb-4 border-2 border-solid border-bg-#333 rounded">
        <legend className="font-bold uppercase">About me</legend>
        <div className="w-[50%] mr-4">
          <p className="mb-3">
            Hello there! My name is <b>Nick Nazarenko.</b> I am a{" "}
            <b>Full Stack Software Engineer</b>, and I'm very passionate and
            dedicated to my work.
          </p>
          <p>
            With <b>4+</b> years experience as a professional software engineer,
            I have acquired the skills and knowledge necessary to make your
            project a success.
          </p>
        </div>
        <div className="w-[50%]">
          <ul>
            <li>
              <b>Name:</b> Nick Nazarenko
            </li>
            <li>
              <b>Location:</b> New York, USA
            </li>
            <li>
              <b>Study:</b> Lviv Polytechnic National University
            </li>
            <li>
              <b>Degree:</b> Bachelor's of Computer Science
            </li>
            <li>
              <b>Email: </b>
              <Link href="mailto:mykyta.soft.dev@gmail.com">
                mykyta.soft.dev@gmail.com
              </Link>
            </li>
            <li>
              <b>Phone:</b>
              <Link href="tel:+1 (929)-215-9938"> +1 (929)-215-9938</Link>
            </li>
          </ul>
        </div>
      </fieldset>
      <fieldset className="flex flex-wrap p-4 border-2 border-solid border-bg-#333 rounded">
        <legend className="font-bold uppercase">Programming Skills</legend>
        <ul className="gap-2">
          <li className="skill-badge text-xs rounded p-2 m-1">JavaScript</li>
          <li className="skill-badge text-xs rounded p-2 m-1">TypeScript</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Next.js</li>
          <li className="skill-badge text-xs rounded p-2 m-1">NestJS</li>
          <li className="skill-badge text-xs rounded p-2 m-1">React</li>
          <li className="skill-badge text-xs rounded p-2 m-1">PHP</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Laravel</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Ruby</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Ruby on Rails</li>
          <li className="skill-badge text-xs rounded p-2 m-1">SQL</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Postgres</li>
          <li className="skill-badge text-xs rounded p-2 m-1">MySQL</li>
          <li className="skill-badge text-xs rounded p-2 m-1">HTML/CSS</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Git</li>
          <li className="skill-badge text-xs rounded p-2 m-1">AWS</li>
          <li className="skill-badge text-xs rounded p-2 m-1">GCP</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Redis</li>
          <li className="skill-badge text-xs rounded p-2 m-1">Nginx</li>
          <li className="skill-badge text-xs rounded p-2 m-1">REST Api</li>
          <li className="skill-badge text-xs rounded p-2 m-1">CI/CD</li>
        </ul>
      </fieldset>
      <fieldset className="flex flex-wrap p-4 border-2 border-solid border-bg-#333 rounded">
        <legend className="font-bold uppercase">Education</legend>
        <div className="w-full flex justify-between">
          <p>
            <strong>Lviv Polytechnic National University</strong>
          </p>
          <p>Lviv, Ukraine</p>
        </div>
        <div className="w-full flex justify-between">
          <p>
            <i>Bachelor’s Degree in Computer Science</i>
          </p>
          <p>
            <i>Sep 2017 – Jul 2021</i>
          </p>
        </div>
      </fieldset>
    </div>
  );
}
