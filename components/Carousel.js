"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Image from "next/image";
import ForestImage from "/public/Forest.jpeg";
import FreeDelivery from "/public/FreeDelivery.png";
import "./Carousel.css";

export default function HomeCarousel() {
  return (
    <Carousel
      className="carousel"
      autoPlay
      infiniteLoop
      stopOnHover
      transitionTime={1000}
      showStatus={false}
    >
      <div className="free-delivery">
        <Image
          className="carousel-img"
          src={FreeDelivery}
          alt="Free Delivery on Sydney Metro orders over $99"
        />
        <h2>FREE DELIVERY</h2>
        <p>On Sydney metro orders over $99.</p>
      </div>
      <Link href="/Brands">
        <Image
          className="carousel-img"
          src={ForestImage}
          alt="Healthy forest"
        />
        <h2>Our Brands</h2>
        <p>Check out all of our product lines</p>
      </Link>
      <Link href="/Sustainability">
        <Image
          className="carousel-img"
          src={ForestImage}
          alt="Healthy forest"
        />
        <h2>Sustainability</h2>
        <p>How we are helping to create a better future.</p>
      </Link>
    </Carousel>
  );
}
