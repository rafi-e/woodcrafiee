import { Caption, Title } from "../common/CustomComponent";
import { FiBox } from "react-icons/fi";
import { IoIosColorFilter } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { instagramPosts } from "./../../assets/data/data";

const filterDiscoverItems = [
  {
    id: 1,
    title: "Filter & Discover",
    icon: <IoIosColorFilter size={70} />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 2,
    title: "Add To Cart",
    icon: <IoBagRemoveOutline size={70} />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 3,
    title: "Fast Shipping",
    icon: <MdOutlineLocalShipping size={70} />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 4,
    title: "Enjoy The Product",
    icon: <FiBox size={70} />,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

export const InstagramPost = () => {
  return (
    <>
      <section className="post grid-cols-1 grid md:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <>
            <div className="h-72 lg:h-76 overflow-hidden" key={post.id}>
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover transition-transform ease-in-out hover:-rotate-12 hover:scale-125"
              />
            </div>
          </>
        ))}
      </section>
      <FilterDiscover />
    </>
  );
};

export const FilterDiscover = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white-100">
        {filterDiscoverItems.map((post) => (
          <>
            <div key={post.id} className="flex items-center gap-8 p-8 py-12 relative">
              <div className="icon">
                <i>{post.icon}</i>
              </div>
              <div>
                <div className="font-medium ">{post.title}</div>
                <Caption>{post.description}</Caption>
                <Title level={1} className="absolute -bottom-5 right-0 opacity-10">0{post.id}</Title>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};
