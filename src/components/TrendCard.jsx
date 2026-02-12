import React from 'react'

const TrendCard = ({ item }) => {
  return (
    <div
      className="
        relative
        w-71.75 h-76.5
        py-8.25 px-5
        rounded-[17px]
        overflow-hidden
        cursor-pointer
        bg-[#E6F3F5]

        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:shadow-[0_25px_45px_rgba(0,0,0,0.15)]
        group
      "
    >
      {/* hover background image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
        style={{ backgroundImage: `url(${item.img})` }}
      />

      {/* overlay */}
      <div
        className="
          absolute inset-0
          bg-black/35
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      {/* content */}
      <div className="relative z-10">
        <img
          className="
            rounded-[15px]
            transition-transform duration-500
            group-hover:scale-105
          "
          src={item.img}
          alt=""
          width={118}
          height={120}
        />

        <h2
          className="
            mt-5
            font-medium
            text-[26px]
            leading-12.5
            transition-colors duration-500
            group-hover:text-white
          "
        >
          {item.title}
        </h2>

        <p
          className="
            text-[#8BAC3E]
            leading-[100%]
            text-[18px]
            font-medium
            mb-5
            transition-colors duration-500
            group-hover:text-lime-300
          "
        >
          {item.type}
        </p>

        <img src={item.rating} alt="" width={68} height={10} />
      </div>
    </div>
  )
}

export default TrendCard
