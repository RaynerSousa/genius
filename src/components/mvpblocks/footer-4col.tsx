import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const data = {
  facebookLink: "https://facebook.com/mvpblocks",
  instaLink: "https://www.instagram.com/geniusitapipoca/",
  twitterLink: "https://twitter.com/mvpblocks",
  githubLink: "https://github.com/mvpblocks",
  dribbbleLink: "public/logo-genius.png",
  services: {
    webdev: "/#",
    webdesign: "/#",
    marketing: "/#",
    googleads: "/#",
  },
  about: {
    history: "#sobre",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },

  contact: {
    email: "leandroas2407@hotmail.com",
    phone: "(88)9617-8334",
    address: "Avenida Duque de Caxias, 1291, SALA 101,Fazendinha,Itapipoca/CE",
  },
  company: {
    name: "Genius-Sistemas de Automação Comercial",
    description:
      "Estamos sempre buscando melhorias para oferecer o melhor serviço aos nossos clientes.",
    logo: "https://i.postimg.cc/2SRcktkT/Mvpblocks.webp",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  // { icon: Twitter, label: "Twitter", href: data.twitterLink },
  // { icon: Github, label: "GitHub", href: data.githubLink },
  // { icon: Dribbble, label: "Dribbble", href: data.dribbbleLink },
];

const aboutLinks = [
  { text: "Sobre", href: data.about.history },
  { text: "Comentarios", href: data.about.team },
  { text: "Equipe", href: data.about.handbook },
  { text: "", href: data.about.careers },
];

const serviceLinks = [
  { text: "Sistema comercial", href: data.services.webdev },
  // { text: 'Suporte', href: data.services.webdesign },
  { text: "Manutenção", href: data.services.marketing },
  // { text: 'Google Ads', href: data.services.googleads },
];

const contactInfo = [
  {
    icon: Mail,
    text: data.contact.email,
    href: `mailto:${data.contact.email}`,
    type: "email",
  },
  {
    icon: Phone,
    text: data.contact.phone,
    href: `tel:+55${data.contact.phone.replace(/\D/g, "")}`,
    type: "phone",
  },
  {
    icon: MapPin,
    text: data.contact.address,
    isAddress: true,
    href: "https://www.google.com/maps/place/ESPA%C3%87O+DEMOSTENES+TEIXEIRA+-+Av.+Duque+de+Caxias,+1291+-+sala+101+-+Fazendinha,+Itapipoca+-+CE,+62502-348/@-3.4994034,-39.5865631,17z/data=!3m1!4b1!4m6!3m5!1s0x7c048c16346aaab:0x8f10c0ab4f692f89!8m2!3d-3.4994034!4d-39.5865631!16s%2Fg%2F11s16pxkl3?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
    type: "address",
  },
];

export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center  gap-2 sm:justify-start">
              <img
                src={"/logo-genius.png"}
                alt="logo"
                className="h-15 w-25  object-cover"
              />
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    target="_blank"
                    prefetch={false}
                    href={href}
                    className="text-primary hover:text-primary/80 transition target:blank"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Sobre Nós</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Nossos Serviços</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Conecte-se conosco</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(
                  ({ icon: Icon, text, isAddress, href, type }) => (
                    <li key={text}>
                      <a
                      target="_blank"
                        className="flex items-center justify-center gap-1.5 sm:justify-start"
                        href={href}
                      >
                        <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                        {isAddress ? (
                          <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                            {text}
                          </address>
                        ) : (
                          <span className="text-secondary-foreground/70 flex-1 transition">
                            {text}
                          </span>
                        )}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
