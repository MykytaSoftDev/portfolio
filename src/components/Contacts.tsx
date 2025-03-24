import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="max-w-[700px] min-h-full py-5 px-5">
      <fieldset className="flex flex-wrap p-4 border-2 border-solid border-bg-#333 rounded">
        <legend className="font-bold uppercase">Contact</legend>
        <div className="flex gap-5">
          <div className="flex flex-col contact-block items-center gap-2 border border-gray w-auto h-auto p-2">
            <Phone />
            <a href="tel:+19292159938">+1 (929)-215-9938</a>
          </div>
          <div className="flex flex-col contact-block items-center gap-2 border border-gray w-auto h-auto p-2">
            <MapPin />
            <p>New York, United States</p>
          </div>
          <div className="flex flex-col contact-block items-center gap-2 border border-gray w-auto h-auto p-2">
            <Mail />
            <a href="mailto:mykyta.soft.dev@gmail.com">
              mykyta.soft.dev@gmail.com
            </a>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
