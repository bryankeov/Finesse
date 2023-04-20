"use client";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Page() {
  return (
    <div className="brands">
      <h1>Our Brands</h1>
      <ul>
        <li>
          <Popup trigger={<button>Finesse</button>} modal nested>
            <h4>Finesse</h4>
            <p>
              The Finesse product range offers superior quality across all
              categories, including Bathroom Tissues, Facial Tissues,
              Handkerchiefs, and Kitchen Towels. The Bathroom Tissues are
              available in 2-ply or 3-ply options, featuring a soft and silky
              texture that is also thick and strong.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Comfort</button>} modal nested>
            <h4>Comfort</h4>
            <p>
              The range of Comfort products is renowned for its premium quality
              and includes Bathroom Tissues, Facial Tissues, Handkerchiefs, and
              Kitchen Towels. The Bathroom Tissues, which are quilted, scented,
              extra soft, and strong, are available in a 3-ply variant, while
              the Facial Tissues are available in a 2-ply variant.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Classic</button>} modal nested>
            <h4>Classic</h4>
            <p>
              The deluxe quality Classic range of products features an
              extra-strong, quilted, and scented texture. It includes 3-ply
              Bathroom Tissues and 2-ply Facial Tissues.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Luxury</button>} modal nested>
            <h4>Luxury</h4>
            <p>
              The Luxury range of products boasts a deluxe quality, with a
              quilted and scented texture. The range includes 3-ply Bathroom
              Tissues and 2-ply Facial Tissues.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>EverSoft</button>} modal nested>
            <h4>EverSoft</h4>
            <p>
              The Facial Tissue range from Eversoft offers deluxe quality
              products with larger than standard sheets that are extra soft and
              non-scented.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>SilkySoft</button>} modal nested>
            <h4>SilkySoft</h4>
            <p>
              The Silkysoft range of products is known for its premium quality,
              featuring a soft and silky texture that is also extra thick and
              strong. The range includes Bathroom Tissues available in both
              2-ply and 3-ply variants.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>MaxiSoft</button>} modal nested>
            <h4>MaxiSoft</h4>
            <p>
              The Maxi Soft range of products offers standard quality Bathroom
              Tissues that are quilted and non-scented. Both Bathroom Tissues
              and Facial Tissues are available in a 3-ply variant.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Unisoft</button>} modal nested>
            <h4>Unisoft</h4>
            <p>
              The Unisoft range of products offers standard quality and great
              value for money. The range includes Bathroom Tissue, Facial
              Tissue, and Kitchen Towels, all available in a 2-ply variant.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Bliss</button>} modal nested>
            <h4>Bliss</h4>
            <p>
              The Bliss range of products offers standard quality with
              exceptional value for money. The range includes Bathroom Tissue,
              Facial Tissue, and Kitchen Towels, all available in a 2-ply
              variant with 400 sheets per roll (individually wrapped), offering
              extra sheets compared to standard products.
            </p>
            <p>
              This range is recommended for commercial use and can also be
              custom made for private labeling purposes.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Simplee</button>} modal nested>
            <h4>Simplee</h4>
            <p>
              The Simplee range of products offers standard quality with great
              value for money. The range includes Bathroom Tissue, Facial
              Tissue, and Kitchen Towels, all available in a 2-ply variant.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Super Soft</button>} modal nested>
            <h4>Super Soft</h4>
            <p>
              The Super Soft range of products is our economy line, offering
              value for money Bathroom Tissues that are extra soft and
              non-scented, available in a 2-ply variant.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Ocean Soft</button>} modal nested>
            <h4>Ocean Soft</h4>
            <p>
              The Ocean Soft range of products is our economy line, offering
              non-scented and value for money options. The range includes 2-ply
              Facial Tissues.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Maxi Strong</button>} modal nested>
            <h4>Maxi Strong</h4>
            <p>
              Our Maxi Strong Paper Towels are known for their extra strength
              and value for money. The texture is quilted and designed to be
              extra absorbent, making them perfect for any household cleaning
              tasks. The towels come in a 3-ply variant.
            </p>
          </Popup>
        </li>
        <li>
          <Popup trigger={<button>Simplee Strong</button>} modal nested>
            <h4>Simplee Strong</h4>
            <p>
              The Simplee Strong paper towels are quilted in texture and
              designed to be extra absorbent, making them great for household
              cleaning tasks. The paper towels come in a 2-ply variant.
            </p>
          </Popup>
        </li>
      </ul>
    </div>
  );
}
