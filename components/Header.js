"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "public/Logo.png";
import Cart from "@mui/icons-material/ShoppingCart";
import Account from "@mui/icons-material/AccountCircle";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link href="/">
          <Image src={Logo} alt="Finesse Tissue Logo" />
        </Link>
      </div>
      <div className="header-icons">
        <Link href="/Account">
          <Account className="header-icon" />
        </Link>
        <Link href="/Cart">
          <Cart className="header-icon" />
        </Link>
      </div>
    </div>
  );
}
