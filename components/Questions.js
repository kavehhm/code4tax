import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question:
      "Pricing (word the question however you want…what is your average price or how much do you charge,etc.) ",
    answer:
      "Our prices are based upon which forms we end up using in the preparation of your return. In general, our prices are on the lower end of the fee spectrum, compared to other tax preparation organizations. On average, a return with itemized deductions and one state return is about $300. We also prepare “kid” returns for your dependents. A basic kid return (W-2’s only), is $30.",
  },
  {
    question: "When & how can I schedule an appointment?",
    answer:
      "Each year, we send out an informational e-mail in November, which will announce the date which appointment scheduling will begin. In general, the date is usually around December 1st, but this is subject to change. Appointment requests can be made by e-mail or phone.",
  },
  {
    question: "How long does an appointment take?",
    answer:
      "It depends upon how prepared you are and how complex your return is. Our procedure is to prepare the return in its entirety at the appointment. Unlike some other tax preparation offices, we do not take your documents for a week or two and then require you to come back to sign the returns and pick them up. Because of this, it is important for you to come to your appointment prepared. In general, an average return with itemized deductions (Schedule A) will take about 45 minutes to an hour.",
  },
  {
    question: "What do I need to do to prepare for my appointment?",
    answer:
      "Prior to your appointment, you should gather all relevant tax documents (in general, anything mailed to you that says \"Important Tax Document\" should be brought), including but not limited: W-2's, 1099's, Mortgage Interest Statements, Property Tax bills, DMV registrations, charitable donation statements & receipts, work-related expenses, etc. Make sure you have all names,dates of birth and social security numbers for you and all your dependents. We have prepared several worksheets to help you organize your income and expenses so that you do NOT need to bring all of your actual receipts with you. All taxpayers can use the General Information worksheet, and there are also specialized worksheets for the following: Law Enforcement, Firefighters & Nurse Deductions, Educator Deductions, Real Estate Professionals, Rental Property Deductions, Small Business, and Farm/Ranch Deductions. Use the link to the left to access the worksheets. If you are unsure as to whether something is deductible or relevant for taxes, you should bring it with you.",
  },
  {
    question: "Do you e-file returns?",
    answer:
      "In general, the IRS takes about 10 days up to 3 weeks to process a normal return and direct deposit a refund. If you are not using direct deposit, it generally takes 3-4 weeks for you to get your check. The state (CA in particular) usually is a little faster and refunds are directly deposited in about 1-2 weeks. Please note that there are times when refunds can be delayed for various reasons. This does not mean you will not get a refund, nor is it any indication that your return is under additional scrutiny. The IRS has a link on their website for you to be able to check on your refund status. Go to www.irs.gov and use the Where's My Refund? feature. You will need your social security number and exact amount of anticipated refund. Most states also have the same feature on their websites. California's website is www.ftb.gov.",
  },
  {
    question: "What are your office hours?",
    answer:
      "During appointment season, office hours are generally 9 am until 7 PM Monday-Saturday.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our office is in south Orange County. The address will be provided to you in a reminder e-mail sent out prior to your scheduled appointment.",
  },
  {
    question:
      "You're located kind of far from me.  Do I have to come to the office in person to do my taxes?",
    answer:
      "For first-time clients, we prefer that you come in person to prepare your returns. There are often many questions that need to be asked in order to ensure that you receive the maximum legal deduction. It's our chance to get to know you, and for you to know us. After the first year, you can opt for one of the other methods of tax preparation that are offered.",
  },
  {
    question: "Are you able to do taxes from other states?",
    answer: "Yes, we can do your taxes regardless of which state you live in",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept all credit cards, cash and personal checks. Online invoicing is available through Square. We do NOT offer the option of taking our fees from your refund.",
  },
  {
    question:
      "What happens if I get audited or get a letter from the IRS or state?",
    answer:
      "If you are sent an IRS notice or are audited for a return which was prepared by anyone in this firm, your notice response or audit representation will be provided at no charge to you. If you are being audited for work that was done by another preparer but are seeking our assistance in helping you prepare and/or would like for us to attend your audit with you, fees will be charged at a base rate of $100 per hour. If you get a notice from the IRS or state, call or e-mail us to let us know. There will be times when the notice can be explained in that initial dialog, however, most of the time, you'll be asked to forward a copy via e-mail, fax or mail so that it can be looked at more closely. Note that if you get a notice from a tax authority, it is imperative that you respond in a timely manner. Do not ignore these notices! The IRS does not look kindly upon those who ignore their deadlines.",
  },
];

export default function Questions() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Your Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
