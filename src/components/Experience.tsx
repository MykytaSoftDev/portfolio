export default function Experience() {
  return (
    <section className="max-w-[650px] min-h-full py-5 px-5">
      <fieldset className="flex flex-col overflow-y-auto h-auto p-4 mb-4 border-2 border-solid border-[#333] rounded max-h-[400px]">
        <legend className="font-bold uppercase">Experience</legend>
        <div className="flex flex-col">
          <div className="mb-2">
            <div className="w-full flex justify-between">
              <p>
                <strong>Full Stack Software Engineer</strong>
              </p>
              <p>May 2023 – Present</p>
            </div>
            <div className="w-full flex justify-between">
              <p>
                <i>Translation Services USA</i>
              </p>
              <p>
                <i>New York, United States</i>
              </p>
            </div>
          </div>

          <div className="p-2">
            <ul className="text-sm list-disc">
              <li>
                Optimized API performance, reducing response times by 30% across
                multiple projects.
              </li>
              <li>
                Built and customized CMS plugins (WordPress, Shopify, Wix,
                Weebly), enhancing functionality and increasing user engagement
                by 40%.
              </li>
              <li>
                Integrated and optimized payment gateways (Stripe, Paddle),
                reducing transaction failures by 25% and improving checkout
                speed.
              </li>
              <li>
                Automated reporting processes to improve efficiency and business
                insights.
              </li>
              <li>
                Refactored and modernized legacy code, reducing technical debt
                and improving system maintainability by 35%.
              </li>
              <li>
                Built webhooks for third-party integrations (Shopify
                application, Paddle payment system), streamlining automation and
                data synchronization.
              </li>
              <li>
                Conducted technical interviews, evaluating candidates for
                technical roles.
              </li>
              <li>
                Implemented caching strategies using Redis, reducing database
                load and improving API response times.
              </li>
              <li>
                Managed deployment processes and server administration, ensuring
                seamless and efficient application operation.
              </li>
              <li>
                Led projects and coordinated team efforts, ensuring 98% on-time
                delivery of high-quality features.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-2">
            <div className="w-full flex justify-between">
              <p>
                <strong>Full Stack Software Engineer</strong>
              </p>
              <p>Sep 2021 – Mar 2023</p>
            </div>
            <div className="w-full flex justify-between">
              <p>
                <i>FlippedNormals</i>
              </p>
              <p>
                <i>Remote, Ukraine</i>
              </p>
            </div>
          </div>

          <div className="p-2">
            <ul className="text-sm list-disc">
              <li>
                Implemented a new functionality to pinpoint users’ locations,
                enabling precise tax rate calculations per country.
              </li>
              <li>
                Developed features that helped businesses establish accurate tax
                calculations, reducing errors by 25%.
              </li>
              <li>
                Built a RESTful API, reducing integration time with backend
                services by 25%, improving system efficiency.
              </li>
              <li>
                Developed a real-time mailing notification system, increasing
                user engagement with updates by 30%.
              </li>
              <li>
                Refactored legacy code, improving reliability, scalability, and
                maintainability.
              </li>
              <li>
                Optimized database queries to improve application performance by
                20%.
              </li>
              <li>
                Expanded unit and integration test coverage by 30%, enhancing
                code stability.
              </li>
              <li>
                Created background job processing for intensive tasks, improving
                app responsiveness and user experience.
              </li>
            </ul>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
