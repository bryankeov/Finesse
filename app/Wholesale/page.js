export default function Page() {
  return (
    <div className="wholesale">
      <h4 className="">Wholesale Enquiries</h4>
      <br />
      <div>
        <p>
          Our company distributes various Finesse Tissue Product brands to a
          diverse clientele, including large pharmaceutical corporations,
          supermarkets, petrol stations, industrial wholesalers, and small
          businesses like dental clinics, medical centers, convenience stores,
          day spas, and others.
        </p>
        <br />
        <p>
          Additionally, we offer custom private labeling and packaging services
          to suit individual requirements.
        </p>
        <br />
        <p>
          To learn more about our account options, bulk discounts, wholesale
          rates, or private packaging needs, please do not hesitate to contact
          us via phone or the submission form below. Our sales representatives
          are eager to assist you.
        </p>
        <br />
        <p>
          For sales inquiries, please call us at (02) 9723 3288 or fax us at
          (02) 9723 1688.
        </p>
        <br />
        <form
          className="
          flex
          flex-col
          w-1/2
        "
        >
          <input
            type="text"
            placeholder="Name"
            className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded"
          />
          <input
            type="text"
            placeholder="Company"
            className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded"
          />
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Contact Number"
              className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded
              flex-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded
              flex-1"
            />
          </div>
          <textarea
            type="text"
            placeholder="Message"
            className="border-2
              border-solid
            border-slate-300
              m-1
              p-1
              rounded
              justify-items-start
              align-items-start
              flex-1
              "
          />
          <button
            className="
          rounded
          border-solid
          border-slate-300
          border-2
          m-1
          "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
