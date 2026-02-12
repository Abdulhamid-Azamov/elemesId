const Button = ({ title, extraClass }) => {
  return (
    <button
      className={`
        cursor-pointer
        rounded-[100px]
        font-medium text-[14px] leading-5.5
        px-4.5 py-2.5
        text-white
        bg-[#8BAC3E]
        
        transition-all duration-300 ease-in-out
        hover:shadow-[0_8px_25px_rgba(139,172,62,0.45)]
        hover:-translate-y-1
        active:translate-y-0
        active:shadow-md
        
        ${extraClass}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
