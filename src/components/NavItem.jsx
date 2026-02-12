const NavItem = ({ item }) => {
    return (
        <a
            href={item.path}
            className="relative font-medium text-[14px] text-[#757575] cursor-pointer transition-all duration-300 ease-out hover:text-[#8BAC3E]

        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-0.5
        after:bg-[#8BAC3E]
        after:rounded-full
        after:transition-all after:duration-300
        hover:after:w-full
      "
        >
            {item.name}

            {item.badge && (
                <span
                    className=" absolute text-[8px] -right-3.75 -top-3.75 py-0.75 px-2 bg-[#E7462D] text-white rounded-lg transition-transform duration-300 hover:scale-110">
                    {item.badge}
                </span>
            )}
        </a>
    );
};

export default NavItem;
