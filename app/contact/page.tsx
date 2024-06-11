import ContactForm from "@/components/ContactForm/ContactForm";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Mail, MapPinned, Phone } from "lucide-react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex justify-between w-full py-10 px-5 max-md:flex-col">
      <div className="flex flex-col w-1/2 max-md:w-full max-md:mb-10">
        <PageTitle title="Contact Info" />
        <div className="w-full flex items-center mb-5">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-primary mr-3">
            <Phone />
          </div>
          <p>+90 (555) 555 55 55</p>
        </div>
        <div className="w-full flex items-center mb-5">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-primary mr-3">
            <Mail />
          </div>
          <p>example@example.com</p>
        </div>
        <div className="w-full flex items-center mb-5">
          <div className="flex items-center justify-center rounded-full w-10 h-10 bg-primary mr-3">
            <MapPinned />
          </div>
          <p>Test Caddesi, Örnek Sokak, No: 21 Daire: 6</p>
        </div>
      </div>
      <div className="flex flex-col w-1/2 max-md:w-full">
        <PageTitle title="Contact Form" />
        <ContactForm />
      </div>
    </div>
  );
}
