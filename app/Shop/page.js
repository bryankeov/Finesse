import Link from "next/link";

export default function Shop() {
  return (
    <div className="shop">
      <Link href="/Toilet">Bathroom Tissue Range</Link>
      <Link href="/Facial">Facial Tissue Range</Link>
      <Link href="/Kitchen">Kitchen Towel Range</Link>
      <Link href="/Napkin">Napkin Range</Link>
    </div>
  );
}
