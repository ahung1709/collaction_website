import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  GlobeSimple as GlobeSimpleIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Plus as PlusIcon,
  X as XIcon,
} from "phosphor-react";

// DISCOUNT IMAGES
// 1) place new files in the /public/discounts folder
// 2) import it here
// 3) reference your import in your discount object
import Phood1 from "public/discounts/Phood-1.jpg";
import Phood2 from "public/discounts/Phood-2.jpg";
import Phood3 from "public/discounts/Phood-3.jpg";

const isDev = process.env.NODE_ENV === "development";

type DiscountType = {
  publish: boolean;
  title: string;
  image: StaticImageData;
  links: {
    website?: string;
    phone?: string;
    location?: string;
    order?: string;
  };
  content: JSX.Element;
};

// ADD/EDIT IMAGES HERE
export const discounts: DiscountType[] = [
  {
    publish: true,
    title: "Phood Kitchen",
    image: Phood1,
    links: {
      website: `https://phoodkitchen.com/`,
      phone: `31615400775`,
      location: ``,
      order: `https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none`,
    },
    content: (
      <>
        Phood standard: hyper-local, fresh, functional food. All our bowls are
        free-from: sugar, unnatural additives, gluten and lactose.
        <br />
        - 1 bowl / week: €17,50
        <br />
        - 3 bowls / week: €46,50
        <br />
        - 5 bowls / week: €60
        <br />
        Our boxes are delivered fresh at your doostep every day.{" "}
        <a
          href="https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none"
          target="_blank"
          rel="noreferrer"
        >
          Order your boxes now.
        </a>
      </>
    ),
  },
  {
    publish: false,
    title: "Phood Kitchen",
    image: Phood3,
    links: {
      website: `https://phoodkitchen.com/`,
      phone: `31615400775`,
      location: `http://www.mapcrunch.com/p/45.609227_-73.593939_301.78_1.08_0`,
      order: `https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none`,
    },
    content: (
      <>
        <strong>Normal content</strong>
        <br />
        Phood standard: hyper-local, fresh, functional food. All our bowls are
        free-from: sugar, unnatural additives, gluten and lactose.
        <br />
        - 1 bowl / week: €17,50
        <br />
        - 3 bowls / week: €46,50
        <br />
        - 5 bowls / week: €60
        <br />
        Our boxes are delivered fresh at your doostep every day.{" "}
        <a
          href="https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none"
          target="_blank"
          rel="noreferrer"
        >
          Order your boxes now.
        </a>
      </>
    ),
  },
  {
    publish: false,
    title: "Phood Kitchen",
    image: Phood2,
    links: {
      website: ``,
      phone: `31615400775`,
      location: ``,
      order: ``,
    },
    content: (
      <>
        <strong>Short content</strong>
        <br />
        Phood standard: hyper-local, fresh, functional food.
        <br />
      </>
    ),
  },
  {
    publish: false,
    title: "Phood Kitchen",
    image: Phood1,
    links: {
      website: `https://phoodkitchen.com/`,
      phone: `31615400775`,
      location: ``,
      order: `https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none`,
    },
    content: (
      <>
        <strong>Loooong content</strong>
        <br />
        Phood standard: hyper-local, fresh, functional food. All our bowls are
        free-from: sugar, unnatural additives, gluten and lactose.
        <br />
        - 1 bowl / week: €17,50
        <br />
        - 3 bowls / week: €46,50
        <br />
        - 5 bowls / week: €60
        <br />
        Our boxes are delivered fresh at your doostep every day.{" "}
        <a
          href="https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none"
          target="_blank"
          rel="noreferrer"
        >
          Order your boxes now.
        </a>
        Phood standard: hyper-local, fresh, functional food. All our bowls are
        free-from: sugar, unnatural additives, gluten and lactose.
        <br />
        - 1 bowl / week: €17,50
        <br />
        - 3 bowls / week: €46,50
        <br />
        - 5 bowls / week: €60
        <br />
        Our boxes are delivered fresh at your doostep every day.{" "}
        <a
          href="https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none"
          target="_blank"
          rel="noreferrer"
        >
          Order your boxes now.
        </a>
        Phood standard: hyper-local, fresh, functional food. All our bowls are
        free-from: sugar, unnatural additives, gluten and lactose.
        <br />
        - 1 bowl / week: €17,50
        <br />
        - 3 bowls / week: €46,50
        <br />
        - 5 bowls / week: €60
        <br />
        Our boxes are delivered fresh at your doostep every day.{" "}
        <a
          href="https://weborder-eu.spont.cash/widget/?key=96033c478dc44494bf56e64d0f23fff6&source=direct&autoopen=none"
          target="_blank"
          rel="noreferrer"
        >
          Order your boxes now.
        </a>
      </>
    ),
  },
];

export default function Discount() {
  // in production, if no cards should be published we won't render anything
  if (!isDev && !discounts.filter(({ publish }) => publish).length) return null;

  return (
    <div className="flex flex-wrap justify-center lg:justify-start mx-auto lg:max-w-4xl mt-12 lg:mt-15">
      {discounts.map((discount, i) => {
        if (!isDev && !discount.publish) return null;
        return <DiscountCard key={discount.title + i} {...discount} />;
      })}
    </div>
  );
}

function DiscountCard({ title, image, links, content }: DiscountType) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="bg-secondary max-w-400 w-full rounded-3xl overflow-hidden relative mb-7 odd:mr-7">
      {/* IMAGE */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          sizes="min-width(450px) 90vw, 400px"
        />
      </div>
      {/* ICONS */}
      <div className="px-8 sm:px-10 my-6 sm:my-8 h-10 flex">
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Vendor Site"
            className="bg-black-400 text-secondary p-2 mr-5 rounded-full"
          >
            <GlobeSimpleIcon weight="bold" size={24} />
          </a>
        )}
        {links.location && (
          <a
            href={links.location}
            target="_blank"
            rel="noreferrer"
            aria-label="View Location on Map"
            className="bg-black-400 text-secondary p-2 mr-5 rounded-full"
          >
            <MapPinIcon weight="bold" size={24} />
          </a>
        )}
        {links.phone && (
          <a
            href={"tel:" + links.phone}
            target="_blank"
            rel="noreferrer"
            aria-label="Phone Vendor"
            className="bg-black-400 text-secondary p-2 mr-5 rounded-full"
          >
            <PhoneIcon weight="bold" size={24} />
          </a>
        )}
        {links.order && (
          <a
            href={links.order}
            target="_blank"
            rel="noreferrer"
            aria-label="Order From Vendor"
            className="bg-accent text-secondary text-button font-bold leading-none text-center rounded-full p-3 h-10 w-26 align-top"
          >
            Order
          </a>
        )}
      </div>
      {/* TITLE & CONTENT */}
      <div className="px-8 sm:px-10">
        <h4 className="mb-5 sm:mb-8">{title}</h4>
        <div className="h-32 line-clamp-5">{content}</div>
      </div>
      {/* MAXIMIZE CONTENT ICON */}
      <div className="py-6 sm:py-8 pl-8 pr-5 sm:pl-10 sm:pr-8 text-right">
        <button
          onClick={() => setShowContent(true)}
          className="inline-block bg-black-100 text-secondary p-2 rounded-full"
        >
          <PlusIcon weight="bold" size={24} />
        </button>
      </div>

      {/* OPENED CARD */}
      <div
        className={clsx(
          "absolute top-0 left-0 w-full h-full bg-accent text-secondary rounded-3xl transition-opacity",
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{
          transitionDuration: "300ms",
          transitionTimingFunction: "cubic-bezier(0,0,0.58,1)",
        }}
      >
        <div className="flex flex-col justify-between h-full">
          {/* TITLE & CONTENT */}
          <div className="px-8 sm:px-10 pt-8 flex flex-col">
            <h5 className="mb-6 sm:mb-8">{title}</h5>
            <div className="overflow-y-scroll scrollbar-track-accent-500 scrollbar-thumb-secondary">
              {content}
            </div>
          </div>
          {/* MINIMIZE CONTENT ICON */}
          <div className="py-6 sm:py-8 pl-8 pr-5 sm:pl-10 sm:pr-8 text-right flex-shrink-0">
            <button
              onClick={() => setShowContent(false)}
              className="inline-block bg-secondary text-black-100 p-2 rounded-full"
            >
              <XIcon weight="bold" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
