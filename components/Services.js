import Service from "./Service";

const Treatments = () => {
  return (
    <div className="w-full ">
      <h2 className="bg-[#AA0000] text-white text-center mt-12 text-xl p-4 mb-4">
        SERVICES WE OFFER
      </h2>
      <div className=" px-12 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Service
          service="PERSONAL RETURNS"
          link="/services/porcelain-crowns"
          description="We will prepare your 1040 annual income tax filing, along with any supporting forms and schedules..."
        />

        <Service
          service="SMALL BUSINESS"
          link="/services/porcelain-veneers"
          description="We will prepare the appropriate Schedule C or F forms to report your income and expenses for any..."
        />
        <Service
          service="RENTAL PROPERTIES"
          link="/services/dental-implants"
          description=" We will prepare the return to report the income and expenses related to any passive, active..."
        />
        <Service
          service="CORPORATIONS/PARTNERSHIPS"
          link="/services/inlays-and-onlays"
          description="We will prepare returns for basic level C Corp, S Corp or Partnerships, including..."
        />

        <Service
          service="NON-PROFIT ORGANIZATIONS"
          link="/services/bridges"
          description="We will prepare returns for non-profit organizations, school PTA and booster organizations, regardless..."
        />
        <Service
          service="RESPONSE TO IRS NOTICES"
          link="/services/teeth-whitening"
          description="All our personal returns come with “insurance” through Protection Plus, which provides assistance for..."
        />
        <Service
          service="AUDITS/APPEALS"
          link="/services/dentures"
          description="We will provide guidance and representation for any IRS audit or appeal on a return that we have prepared free..."
        />
        <Service
          service="AMMENDED RETURNS"
          link="/services/cosmetic-bondings"
          description="If you receive a corrected W-2 or 1099, or discover that a document or information was missing at the time..."
        />
       
      </div>
      <div className="px-12 pt-0 md:pt-0 mb-6 grid grid-cols-1 md:grid-cols-2"></div>
    </div>
  );
};

export default Treatments;
