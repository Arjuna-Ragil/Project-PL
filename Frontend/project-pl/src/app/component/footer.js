import Image from "next/image";

export default function Footer() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-10 bg-white p-5">
      <div className="flex w-full flex-col gap-5 border-r-2 p-5 text-justify">
        <h2 className="w-fit border-b-2 text-3xl">About Us</h2>
        <p>
          At Éclara, we believe beauty is about confidence, self-expression, and
          feeling your best. We bring together a curated selection of makeup,
          skincare, and personal care products to help you glow — inside and
          out. With trusted brands, trending must-haves, and fast, reliable
          service, we make beauty shopping effortless and fun. Whether you're
          enhancing your everyday look or trying something bold, we're here to
          support your journey.
        </p>
        <h2 className="w-fit border-b-2 text-3xl">Contact Us</h2>
        <div className="flex flex-col">
          <p>E-mail: eclarabeauty@gmail.com</p>
          <p>Phone: +62812645375867</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">
          REGISTER YOUR EMAIL FOR NEWS AND SPECIAL OFFERS
        </h2>
        <div className="group relative z-30">
          <div className="from-background1 to-background2 flex w-2/3 flex-row items-center justify-between bg-gradient-to-r from-10% p-3 transition-all duration-200 not-group-hover:translate-2">
            <button>SIGN UP</button>
            <Image
              src={"/redirectIcon.svg"}
              alt="Arrow Icon"
              width={50}
              height={50}
            />
          </div>
          <div className="bg-select absolute -bottom-3 left-3 -z-10 h-15 w-2/3 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
        </div>
        <h3 className="mt-3 w-fit border-b-2 text-3xl">More Inspiration</h3>
        <div className="flex flex-row gap-5">
          <button className="hover:bg-background1 rounded-xl duration-200">
            <Image
              src={"/tiktokIcon.svg"}
              alt="tiktok"
              height={50}
              width={50}
            />
          </button>
          <button className="hover:bg-background2 rounded-xl duration-200">
            <Image
              src={"/instagramIcon.svg"}
              alt="Instagram"
              height={50}
              width={50}
            />
          </button>
          <button className="hover:bg-background3 rounded-md duration-200">
            <Image src={"/xIcon.svg"} alt="X" height={50} width={50} />
          </button>
        </div>
      </div>
    </div>
  );
}
