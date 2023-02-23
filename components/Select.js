import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 0, name: "General", path: "/pdf/General.pdf" },
  { id: 1, name: "Educator", path: "/pdf/EducatorDeductions.pdf" },
  { id: 2, name: "Farm-Ranch", path: "/pdf/FarmRanch.pdf" },
  { id: 3, name: "Firefighter", path: "/pdf/FireFighter.pdf" },
  { id: 4, name: "Home Office ", path: "/pdf/HomeOffice.pdf" },
  { id: 5, name: "Law Enforcement", path: "/pdf/LawEnforcement.pdf" },
  { id: 6, name: "Nurse", path: "/pdf/Nurse.pdf" },
  { id: 7, name: "Property Sale", path: "/pdf/PropertySale.pdf" },
  { id: 8, name: "Real Estate", path: "/pdf/RealEstate.pdf" },
  { id: 9, name: "Rental", path: "/pdf/Rental.pdf" },
  { id: 10, name: "Small Business", path: "/pdf/Smallbiz.pdf" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  const [selected, setSelected] = useState(people[0]);

  useEffect(() => {
    props.moveSelected(selected);
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-2xl font-medium text-[#AA0000]">
            Worksheets
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-4 pl-3 pr-10 text-left shadow-sm focus:border-[#3e26ae] focus:outline-none focus:ring-1 focus:ring-[#3e26ae] sm:text-xl">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xl">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-[#342090]" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-[#342090]",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
