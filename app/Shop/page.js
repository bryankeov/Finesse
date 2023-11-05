import Link from "next/link";

export default function Page() {
  return (
    <div className="shop">
      <Link href="/Range/Toilet">Bathroom Tissue Range</Link>
      <Link>Facial Tissue Range</Link>
      <Link>Kitchen Towel Range</Link>
      <Link>Napkin Range</Link>
    </div>
  );
}
