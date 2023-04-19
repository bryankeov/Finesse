import Link from "next/link";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <Link href="/Shop" className="menu-link">
        SHOP
      </Link>
      <Link href="/Brands" className="menu-link">
        OUR BRANDS
      </Link>
      <Link href="/Sustainability" className="menu-link">
        SUSTAINABILITY
      </Link>
      <Link href="/Wholesale" className="menu-link">
        WHOLESALE
      </Link>
      <Link href="/Enquiries" className="menu-link">
        ENQUIRIES
      </Link>
      <Link href="/Account" className="menu-link">
        MY ACCOUNT
      </Link>
    </div>
  );
}
