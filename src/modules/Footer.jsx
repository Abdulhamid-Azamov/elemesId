import { Logo } from "../assets/images"

const Footer = () => {
    return (
        <div className='containers'>
            <div className='flex justify-between w-full h-90 bg-[#F9FFF6] mt-47.75 py-19.75 px-15.75 rounded-[20px]'>
                <div>
                    <div className="w-83.75">
                        <img src={Logo} alt="" />
                        <p className="mt-5 font-normal text-[14px] text-[#757575] leading-5">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                            Kecamatan Setiabudi, Kota Jakarta Selatan,
                            Daerah Khusus Ibukota Jakarta 12950</p>
                    </div>
                    <div className="flex mt-8.25 items-start justify-start gap-2">
                        <div className="w-10 py-2.5 px-2.5 duration-400 hover:cursor-pointer text-[#8BAC3E] rounded-[50%] hover:bg-[#8BAC3E] hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 6.66675L9.075 11.0501C9.34888 11.2328 9.67075 11.3303 10 11.3303C10.3292 11.3303 10.6511 11.2328 10.925 11.0501L17.5 6.66675M4.16667 15.8334H15.8333C16.2754 15.8334 16.6993 15.6578 17.0118 15.3453C17.3244 15.0327 17.5 14.6088 17.5 14.1667V5.83341C17.5 5.39139 17.3244 4.96746 17.0118 4.6549C16.6993 4.34234 16.2754 4.16675 15.8333 4.16675H4.16667C3.72464 4.16675 3.30072 4.34234 2.98816 4.6549C2.67559 4.96746 2.5 5.39139 2.5 5.83341V14.1667C2.5 14.6088 2.67559 15.0327 2.98816 15.3453C3.30072 15.6578 3.72464 15.8334 4.16667 15.8334Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="w-10 py-2.5 px-2.5 duration-400 hover:cursor-pointer text-[#8BAC3E] rounded-[50%] hover:bg-[#8BAC3E] hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="w-10 py-2.5 px-2.5 duration-400 hover:cursor-pointer text-[#8BAC3E] rounded-[50%] hover:bg-[#8BAC3E] hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99992 3.87187C11.9959 3.87187 12.2326 3.87935 13.0213 3.91548C15.0471 4.00768 15.9934 4.9689 16.0856 6.97982C16.1217 7.76786 16.1286 8.00458 16.1286 10.0005C16.1286 11.9971 16.1211 12.2332 16.0856 13.0213C15.9928 15.0303 15.049 15.9934 13.0213 16.0856C12.2326 16.1217 11.9971 16.1292 9.99992 16.1292C8.00396 16.1292 7.76723 16.1217 6.97919 16.0856C4.94835 15.9928 4.00706 15.0272 3.91486 13.0206C3.87873 12.2326 3.87125 11.9965 3.87125 9.99992C3.87125 8.00396 3.87935 7.76786 3.91486 6.97919C4.00768 4.9689 4.95146 4.00706 6.97919 3.91486C7.76786 3.87935 8.00396 3.87187 9.99992 3.87187ZM9.99992 2.52441C7.9697 2.52441 7.71553 2.53314 6.91814 2.56927C4.20329 2.69386 2.69448 4.20017 2.56989 6.91752C2.53314 7.71553 2.52441 7.9697 2.52441 9.99992C2.52441 12.0301 2.53314 12.2849 2.56927 13.0823C2.69386 15.7972 4.20017 17.306 6.91752 17.4306C7.71553 17.4667 7.9697 17.4754 9.99992 17.4754C12.0301 17.4754 12.2849 17.4667 13.0823 17.4306C15.7947 17.306 17.3072 15.7997 17.4299 13.0823C17.4667 12.2849 17.4754 12.0301 17.4754 9.99992C17.4754 7.9697 17.4667 7.71553 17.4306 6.91814C17.3085 4.20578 15.8003 2.69448 13.0829 2.56989C12.2849 2.53314 12.0301 2.52441 9.99992 2.52441V2.52441ZM9.99992 6.16125C7.87999 6.16125 6.16125 7.87999 6.16125 9.99992C6.16125 12.1198 7.87999 13.8392 9.99992 13.8392C12.1198 13.8392 13.8386 12.1205 13.8386 9.99992C13.8386 7.87999 12.1198 6.16125 9.99992 6.16125ZM9.99992 12.4918C8.6238 12.4918 7.50808 11.3767 7.50808 9.99992C7.50808 8.6238 8.6238 7.50808 9.99992 7.50808C11.376 7.50808 12.4918 8.6238 12.4918 9.99992C12.4918 11.3767 11.376 12.4918 9.99992 12.4918ZM13.9906 5.11281C13.4947 5.11281 13.0929 5.51462 13.0929 6.00987C13.0929 6.50512 13.4947 6.90693 13.9906 6.90693C14.4858 6.90693 14.887 6.50512 14.887 6.00987C14.887 5.51462 14.4858 5.11281 13.9906 5.11281Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h3 className="text-[#333333] font-medium text-[18px] mb-5.75 leading-6">
                        Categories
                    </h3>
                    <a className="font-normal text-[14px] leading-4 text-[#757575]" href="#">Cupcake</a>
                    <a className="font-normal text-[14px] leading-4 text-[#757575]" href="#">Pizza</a>
                    <a className="font-normal text-[14px] leading-4 text-[#757575]" href="#">Kebab</a>
                    <a className="font-normal text-[14px] leading-4 text-[#757575]" href="#">Salmon</a>
                    <a className="font-normal text-[14px] leading-4 text-[#757575]" href="#">Dougnut</a>
                </div>
                <div>
                    <h3 className="text-[#333333] font-medium text-[18px] leading-6">About Us</h3>
                    <div className="flex flex-col gap-4 mt-8.25">
                        <a className="text-[#757575] font-normal text-[14px] leading-4" href="#">About Us</a>
                        <a className="text-[#757575] font-normal text-[14px] leading-4" href="#">FAQ</a>
                        <a className="text-[#757575] font-normal text-[14px] leading-4" href="#">Report Problem</a>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-[#333333] font-medium text-[18px] leading-6">
                            Newsletter
                        </h3>
                        <p className="text-[#757575] font-normal text-[14px] leading-6 mt-8.25">Get now free 50% discount for alll <br /> products on your first order</p>
                    </div>
                    <div className="flex w-62.5 mt-4.5">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="font-normal text-[14px] leading-6  w-full px-5 py-2 rounded-l-lg border-2 border-[#33333]  bg-white focus:outline-none"
                        />
                        <button className="px-5 py-2 bg-[#8BAC3E] hover:cursor-pointer text-white font-semibold rounded-r-lg border border-[#8BAC3E] transition-all duration-300 hover:bg-white hover:text-[#8BAC3E]">
                            SEND
                        </button>
                    </div>
                    <div className="flex mt-5 items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 6.66675L9.075 11.0501C9.34888 11.2328 9.67075 11.3303 10 11.3303C10.3292 11.3303 10.6511 11.2328 10.925 11.0501L17.5 6.66675M4.16667 15.8334H15.8333C16.2754 15.8334 16.6993 15.6578 17.0118 15.3453C17.3244 15.0327 17.5 14.6088 17.5 14.1667V5.83341C17.5 5.39139 17.3244 4.96746 17.0118 4.6549C16.6993 4.34234 16.2754 4.16675 15.8333 4.16675H4.16667C3.72464 4.16675 3.30072 4.34234 2.98816 4.6549C2.67559 4.96746 2.5 5.39139 2.5 5.83341V14.1667C2.5 14.6088 2.67559 15.0327 2.98816 15.3453C3.30072 15.6578 3.72464 15.8334 4.16667 15.8334Z" stroke="#8BAC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="font-normal text-[14px] leading-6">
                            elemesid@gmail.com
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_307_5547)">
                                <path
                                    d="M3.98816 1.98816C3.67559 2.30072 3.5 2.72464 3.5 3.16667V4C3.5 10.9033 9.09667 16.5 16 16.5H16.8333C17.2754 16.5 17.6993 16.3244 18.0118 16.0118C18.3244 15.6993 18.5 15.2754 18.5 14.8333V12.1008C18.5 11.9259 18.445 11.7553 18.3427 11.6134C18.2404 11.4714 18.096 11.3653 17.93 11.31L14.1858 10.0617C13.9956 9.99841 13.7888 10.0059 13.6036 10.0827C13.4184 10.1596 13.2671 10.3006 13.1775 10.48L12.2358 12.3608C10.1954 11.4389 8.5611 9.80462 7.63917 7.76417L9.52 6.8225C9.69938 6.73288 9.84042 6.58158 9.91726 6.39637C9.9941 6.21116 10.0016 6.00445 9.93833 5.81417L8.69 2.07C8.63475 1.90413 8.52874 1.75984 8.38696 1.65754C8.24519 1.55525 8.07483 1.50013 7.9 1.5H5.16667C4.72464 1.5 4.30072 1.67559 3.98816 1.98816Z"
                                    stroke="#8BAC3E"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_307_5547">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className="font-normal text-[14px] leading-6">
                            0888 1111 2222
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
