import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { GrResources } from "react-icons/gr";
import { TbFreeRights } from "react-icons/tb";
import logo from "/images/common/about.jpg"

export const About = () => {
  return (
    <>
      <section className="bg-gray-100 mt-10">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <span className="text-[#0D775E]"> About Our</span> Woodshop
              </h2>
              <p className="mt-4 text-lg">
                We're passionate about crafting high-quality wood products that
                bring warmth and character to your home. From handcrafted
                furniture to bespoke decor, we're dedicated to helping you
                create a space that's truly unique.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 font-medium"
                >
                  Learn more about our woodshop
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={logo}
                alt="Woodshop Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="font-heading mb-4 bg-[#2f770d]/30 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
        Why Choose Our Wood Products?
      </h2>
      <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-4xl">
        We source our wood from sustainable forests and craft each piece with care to ensure a unique and durable product.
      </p>
      <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
        Our wood products are designed to bring warmth and character to your home, and we're committed to helping you find the perfect piece for your space.
      </p>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-[#0D775E]">
              <GrResources size={50}/>
            </div>
            <p className="font-heading ml-16 text-lg leading-6 font-bold text-[#0D775E]">
              Sustainable Sourcing
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            We source our wood from sustainable forests to ensure a minimal impact on the environment.
          </dd>
        </div>
        <div className="relative">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-[#0D775E]">
              <FaHandsHoldingCircle size={50}/>
            </div>
            <p className="font-heading ml-16 text-lg leading-6 font-bold text-[#0D775E]">
              Handcrafted with Care
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Each piece is handcrafted with care to ensure a unique and durable product.
          </dd>
        </div>
        <div className="relative">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-[#0D775E]">
              <GiSandsOfTime size={50} />
            </div>
            <p className="font-heading ml-16 text-lg leading-6 font-bold text-[#0D775E]">
              Unique and Durable
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Our wood products are designed to be both unique and durable, ensuring they will last for years to come.
          </dd>
        </div>
        <div className="relative">
          <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-[#0D775E]">
              <TbFreeRights size={50} />
            </div>
            <p className="font-heading ml-16 text-lg leading-6 font-bold text-[#0D775E]">
              Competitive Pricing
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            We offer competitive pricing on all of our wood products, ensuring you get the best value for your money.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
      </section>
    </>
  );
};
