import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid h-full w-full md:grid-cols-2 flex-col max-md:items-center max-md:justify-center max-md:text-center md:gap-10 bg-white dark:bg-gray-500/50 dark:text-white p-5">
      <div className="flex w-full flex-col gap-5 md:border-r-2 p-5 text-justify">
        <h2 className="md:w-fit w-full border-b-2 text-3xl text-center p-1">About Us</h2>
        <p>
          At Éclara, we believe beauty is about confidence, self-expression, and
          feeling your best. We bring together a curated selection of makeup,
          skincare, and personal care products to help you glow — inside and
          out. With trusted brands, trending must-haves, and fast, reliable
          service, we make beauty shopping effortless and fun. Whether you're
          enhancing your everyday look or trying something bold, we're here to
          support your journey.
        </p>
        <h2 className="w-fit border-b-2 text-3xl max-md:hidden">Contact Us</h2>
        <div className="flex flex-col max-md:hidden">
          <p>E-mail: eclarabeauty@gmail.com</p>
          <p>Phone: +62812645375867</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5">
        <h2 className="md:text-3xl text-lg font-bold">
          REGISTER YOUR EMAIL FOR NEWS AND SPECIAL OFFERS
        </h2>
        <Link href={"/signup"}>
          <div className="group relative z-30">
            <div className="from-background1 to-background2 dark:from-backgroundDark2 dark:to-backgroundDark3 flex md:w-2/3 w-full flex-row items-center justify-between bg-gradient-to-r from-10% p-3 transition-all duration-200 not-group-hover:translate-2">
                <button>
                  SIGN UP
                </button>
              <Image
                src={"/redirectIcon.svg"}
                alt="Arrow Icon"
                width={50}
                height={50}
                className="dark:invert"
              />
            </div>
            <div className="bg-select dark:bg-select/20 absolute -bottom-3 left-3 -z-10 h-15 w-2/3 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
          </div>
        </Link>
        <h3 className="mt-3 md:w-fit w-full border-b-2 text-3xl p-1">More Inspiration</h3>
        <div className="flex flex-row gap-5 max-md:justify-center">
          <button className="hover:bg-background1 rounded-xl duration-200">              <Image
              src={"/tiktokIcon.svg"}
              alt="tiktok"
              height={50}
              width={50}
              className="dark:invert w-auto h-auto"
            />
          </button>
          <button className="hover:bg-background2 rounded-xl duration-200">
            <Image
              src={"/instagramIcon.svg"}
              alt="Instagram"
              height={50}
              width={50}
              className="dark:invert w-auto h-auto"
            />
          </button>
          <button className="hover:bg-background3 rounded-md duration-200">
            <Image 
              src={"/xIcon.svg"} 
              alt="X" 
              height={50} 
              width={50} 
              className="dark:invert w-auto h-auto"
            />
          </button>
        </div>
      </div>
      <div className="md:hidden flex flex-col p-5 gap-3">
        <h2 className="w-full border-b-2 text-3xl p-1">Contact Us</h2>
        <div className="flex flex-col">
          <p>E-mail: eclarabeauty@gmail.com</p>
          <p>Phone: +62812645375867</p>
        </div>
      </div>
    </div>
  );
}
