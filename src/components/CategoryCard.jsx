const CategoryCard = ({ item }) => {
  return (
    <li
      className="
        w-57.5 h-43.75
        bg-[#F0FEEB]
        py-7.5 px-20.25
        flex flex-col justify-center items-center
        rounded-[30px]
        cursor-pointer

        transition-all duration-300 ease-out
        hover:bg-white
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_rgba(139,172,62,0.25)]
        group
      "
    >
      <img
        className="
          mb-6
          transition-transform duration-300
          group-hover:scale-110
        "
        src={item.icon}
        alt="Icon"
        width={47}
        height={52}
      />
      <h3
        className="
          font-medium text-[22px] text-[#333333]
          transition-colors duration-300
          group-hover:text-[#8BAC3E]
        "
      >
        {item.title}
      </h3>
      <p className="font-normal text-[14px] text-[#333333] opacity-80">
        {item.count}
      </p>
    </li>
  );
};

export default CategoryCard;
