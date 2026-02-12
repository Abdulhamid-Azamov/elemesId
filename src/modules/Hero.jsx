import { HeroImg } from "../assets/images"
import { Button } from "../components"

const Hero = () => {
    return (
        <section>
            <div className="containers">
                <div className="flex justify-between items-center">
                    <div className="w-120.5 h-71.5">
                        <h1 className="font-normal mb-8 leading-16 text-[64px] text-[#8BAC3E]">
                            Good Food Us Good Mood
                        </h1>
                        <p className="text-[18px] mb-10 font-normal leading-7.25 text-[#757575]"  >
                            I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                        </p>
                        <Button title={"Daftar Sekarang"}/>
                        <Button title={"About Us"} extraClass={'!text-[#333333] bg-[#F2F2F2] ml-4'} />
                    </div>
                    <div>
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
