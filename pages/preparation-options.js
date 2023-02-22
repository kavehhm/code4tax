import TopSticky from "@/components/Top-Sticky";
import MainNav from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Preparation() {
  return (
    <div>
      <TopSticky />
      <div className="topity sticky z-10">
        <MainNav />
      </div>
      <h1
        className="text-center mt-10 font-bold text-[#AA0000]"
        style={{ fontSize: "3em" }}
      >
        We Offer a Variety of Preparation Options to Meet Your needs:
      </h1>

      <div className="  text-xl w-4/5 m-auto mt-16 mb-24">
        <p className="mb-8">
          <span className="font-semibold text-[#26176B] text-2xl">In-Person: </span> <br></br>
          You can schedule to meet with us in our offices. As long as you are
          prepared and have all your necessary documentation, the return will be
          fully completed during your appointment, so there would be no need to
          return again at a later date to pick up your returns and sign
          documents.
        </p>
        <p className="mb-8">
          <span className="font-semibold text-[#26176B] text-2xl">Main-in: </span> <br></br> If
          your return is fairly straightforward and “simple”, you can opt to
          forego the scheduled appointment and use this streamlined process. You
          would send us your documents and completed worksheets by either
          uploading through a secure portal (we will provide you with a link),
          e-mailing PDF’s, faxing, or mailing photocopies to the mailing
          address. The return will be prepared and any questions would be dealt
          with via e-mail or phone calls. The average turnaround time for a
          mail-in preparation is 2 weeks.
        </p>

        <p className="mb-8">
          <span className="font-semibold text-[#26176B] text-2xl">Remote: </span> <br></br> If
          you prefer to be able to meet and interact live but cannot come in
          person, we can schedule a Remote or virtual appointment via Zoom,
          FaceTime or phone call, whichever is your preference. In this process,
          you would need to send your documents and worksheets (in the same
          manner described above in the Mail-In section) at least 3 days prior
          to your scheduled appointment. The actual appointment time will focus
          on answering any questions and filling in any holes, as opposed to the
          actual data entry. The signatures, delivery of returns, and payment
          for services will all be completed via e-mails. Because remote
          appointments do require additional administrative work on our end,
          there is a $25 remote fee that is added to the preparation fees for
          all remote appointments.
        </p>
      </div>

      <Footer />
    </div>
  );
}
