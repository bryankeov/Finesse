import SusTrees from "/public/Sustainability.jpeg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="sustainability">
      <Image
        className="float-right w-96 h-auto"
        src={SusTrees}
        alt="Healthy green forest"
      />
      <p className="sus-text">
        At Finesse Tissue Products, we prioritize the impact of our
        manufacturing processes on the environment and ensure that all of our
        paper products meet Australian standards.
      </p>
      <p className="sus-text">
        Our commitment to minimizing waste is evident through the recycling of
        excess paper products during manufacturing and the repurposing of
        offcuts and wastepaper by paper mills into products like outer cartons
        and cupboard products.
      </p>
      <p className="sus-text">
        Unlike other bathroom tissue products in Australia that can cause
        blockages in sewage pipes due to their inability to break down, our
        bathroom tissue products are fully biodegradable.
      </p>
      <p className="sus-text">
        We have been dedicated to environmental sustainability for over 20 years
        and will continue to prioritize reducing the potential impact of our
        paper products and packaging on the environment for years to come.
      </p>
    </div>
  );
}
