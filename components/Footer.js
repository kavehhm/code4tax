import Link from 'next/link';

const navigation = {
  main: [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/patient-info/information" },
    { name: "F.A.Q.", href: "/services/service" },
    { name: "Worksheets", href: "/reviews" },
    { name: "Preparation Options", href: "/reviews" },
    { name: "Contact", href: "/gallery" },
 
  ],
  
};

export default function Footer() {
  return (
    <footer className="bg-[#26176B]">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-12 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-base leading-6 text-white hover:border-b"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-slate-200">
          <a href="https://www.heydaydigital.io" target="_blank" rel="noreferrer" className="hover:border-b">Website Design by Heyday Digital &copy; 2023</a>
        </p>
      </div>
    </footer>
  );
}
