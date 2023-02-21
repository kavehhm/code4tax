import  {Disclosure} from "@headlessui/react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import  Link from "next/link";
import Image from "next/image";
import logo from "../public/msc/logo.png"

const navigation = [
  { name: "Home", href: "/", current: false },
  {
    name: "Services",
    href: "/services/personal-returns",
    current: false,
  },
  { name: "F.A.Q.", href: "/faq", current: false },
  { name: "Worksheets", href: "/reviews", current: false },
  { name: "Preparation Options", href: "/preparation-options", current: false },

  { name: "Contact", href: "/gallery", current: false },
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainNav() {
  return (
    <Disclosure as="nav" className="bg-[#26176B]  duration-75 transition-all"  >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center ">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-20 w-auto md:hidden"
                    src={logo}
                    alt="Code-4 Tax"
                  />
                  <Image
                    className="hidden h-20 w-auto md:block"
                    src={logo}
                    alt="Code-4 Tax"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="whitespace-nowrap flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={`${item.name}`}
                        href={`${item.href}`}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-white hover:bg-blue-300 hover:text-black",
                          "lg:px-6 px-2 py-2 rounded-md xl:text-base  font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={`${item.href}`}
                  className={classNames(
                    item.current
                      ? "bg-blue-600 text-white"
                      : "text-white hover:bg-blue-300 hover:text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
