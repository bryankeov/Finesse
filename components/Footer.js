"use client";
import Location from "@mui/icons-material/LocationOnOutlined";
import Phone from "@mui/icons-material/PhoneOutlined";
import Fax from "@mui/icons-material/FaxOutlined";
import Email from "@mui/icons-material/EmailOutlined";
import React, { useRef } from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-about">
        <h2>ABOUT US</h2>
        <p>
          Finesse Tissue Products, established in 1998, is a 100% family-owned
          Australian company. The founders, Richard and Lin Lee, began from
          humble origins and have since cultivated a distinguished enterprise
          that prides itself on delivering exceptional quality, professionalism,
          and punctuality. Their triumph is largely due to their robust supplier
          relations, which enable them to offer superior products and
          competitive prices to their clients. The company is committed to
          crafting eco-friendly, socially responsible, and economically
          sustainable products. When selecting Finesse Tissue Products, you can
          be certain that you are choosing products of superior quality.
        </p>
      </div>
      <div className="footer-contact">
        <h2>CONTACT US</h2>
        <div className="contact-item">
          <Location className="icons" />
          <p>122 Lisbon Street, Fairfield East, NSW, 2165</p>
        </div>
        <div className="contact-item">
          <Phone className="icons" />
          <p>(02) 9723 3288</p>
        </div>
        <div className="contact-item">
          <Fax className="icons" />
          <p>(02) 9723 1688</p>
        </div>
        <div className="contact-item">
          <Email className="icons" />
          <div className="email-item">
            <p>sales@finessetissue.com.au</p>
            <p>accounts@finessetissue.com.au</p>
          </div>
        </div>
      </div>
    </div>
  );
}
