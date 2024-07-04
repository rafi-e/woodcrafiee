import { promotionalInfo } from "../../assets/data/data";

export const Banner = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
        {promotionalInfo.map((info) => (
          <>
            <div className="box relative w-full" key={info.id}>
              <div className="w-full h-[55vh]">
                <img
                  src={info.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-0 left-0 p-3 md:p-8 lg:w-4/5">
                <span className="bg-white px-6 py-2 text-sm">{info.tag}</span>
                <div className="my-5 font-medium text-2xl md:text-[28px] text-primary">
                  {info.title}
                </div>
                <div className="text-[14px] lg:text-base font-normal text-primary-gray y-0 md:my-5">{info.description}</div>
                <button className="secondary-btn">Shop Now</button>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};
