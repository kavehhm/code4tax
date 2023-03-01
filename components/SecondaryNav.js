import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    name: "Personal returns",
    href: "personal-returns",
    text: "We will prepare your 1040 annual income tax filing, along with any supporting forms and schedules required to provide the IRS with a complete return. This includes any and all corresponding state returns.",
    current: true,
  },
  {
    name: "small business, farms/ranches",
    href: "small-business-and-farms-ranches",
    text: "We will prepare the appropriate Schedule C or F forms to report your income and expenses for any sole proprietorship, single member LLC, independent contractor activities you may have, as well as your for-profit farming and ranching activities.This will include any required corresponding forms and schedules, for example Form 4562 Depreciation, and qualified home office expenses.",
    current: false,
  },
  {
    name: "rental properties",
    href: "rental-properties",
    text: "We will prepare the return to report the income and expenses related to any passive, active, long term, or short term/vacation rental properties that you may own. This preparation will include any supporting forms required.",
    current: false,
  },
  {
    name: "corporations / partnerships",
    href: "corporations-and-partnerships",
    text: "We will prepare returns for basic level C Corp, S Corp or Partnerships, including all required supporting schedules and forms, as well as state forms. We will use our discretion as to what level of complexity we are willing to take on, as more complex corporate issues should be handled by Corporate Tax specialists and would be beyond the scope of the services we are prepared to offer.",
    current: false,
  },
  {
    name: "non-profit organizations",
    href: "non-profit-organizations",
    text: "We will prepare returns for non-profit organizations, school PTA and booster organizations, regardless of whether this organization is required to file a postcard, EZ or full 990 return. In addition, for organizations in California, we will also prepare the required Registry of Charitable Trust returns required by the CA Attorney General’s office.",
    current: false,
  },
  {
    name: "response to irs notices",
    href: "irs-notices",
    text: "All our personal returns come with “insurance” through Protection Plus, which provides assistance for IRS notices and audits. This service is available for all personal returns prepared by us. In addition, we will also provide our own personal assistance to IRS issues that may arise, so you will have two resources available for assistance at all times.",
    current: false,
  },
  {
    name: "audits / appeals",
    href: "audits-and-appeals",
    text: "We will provide guidance and representation for any IRS audit or appeal on a return that we have prepared free of charge. Representation/assistance for an issue arising from a return not prepared by us will be determined on a case by case basis.",
    current: false,
  },
  {
    name: "amended returns",
    href: "amended-returns",
    text: "If you receive a corrected W-2 or 1099, or discover that a document or information was missing at the time your original return was prepared, we will prepare the amended return at a minimal charge. If an amendment or change is required due to an oversight or error on our part, the amendment will be at no charge.",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SecondaryNav(props) {
  const router = useRouter();
  const route = router.query;
  const param = route.service;



  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i]["href"] === param) {
      navigation[i]["current"] = true;
      props.moveUp(navigation[i]["name"].toUpperCase(), navigation[i]["text"]);
    } else {
      navigation[i]["current"] = false;
    }
  }

  return (
    <nav aria-label="Sidebar ">
      <div className="space-y-1 bg-[#26176B]  p-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-blue-300 text-gray-900 font-bold"
                : "text-white font-bold hover:bg-blue-400 ",
              "group flex items-center px-3 py-2 text-base  rounded-md"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <span className="truncate">{item.name.toUpperCase()}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
