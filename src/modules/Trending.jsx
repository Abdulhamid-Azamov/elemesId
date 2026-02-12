import { BgImg, CupcakeChoco, DonerKebab, DoughnutMilk, DoughnutUnicorn, KathiKebab, PizzaMeat, PizzaPaperoni, Rating, Salmon, SalmonRoll } from "../assets/images"
import { Button, Trendcard } from "../components"

const Trending = () => {
    const trendCard = [
        { id: 1, img: PizzaPaperoni, title: "Pizza Paperoni", type: "Pizza", rating: Rating },
        { id: 2, img: PizzaMeat, title: "Pizza Meat", type: "Pizza", rating: Rating },
        { id: 3, img: DonerKebab, title: "Doner Kebab", type: "Kebeb", rating: Rating },
        { id: 4, img: SalmonRoll, title: "Salmon Roll", type: "Salmon", rating: Rating },
        { id: 5, img: CupcakeChoco, title: "Cupcake Choco", type: "Cupcake", rating: Rating },
        { id: 6, img: DoughnutMilk, title: "Doughnut Milk", type: "Doughnut", rating: Rating },
        { id: 7, img: DoughnutUnicorn, title: "Doughnut Unicorn", type: "Doughnut", rating: Rating },
        { id: 8, img: KathiKebab, title: "Kathi Kebab", type: "Kebab", rating: Rating },
    ]
    return (
        <section>
            <div className="containers">
                <h2 className="text-[#333333] font-medium text-[38px] leading-12.5">
                    Browser Our Trending   <br />
                    <span className="text-[#8BAC3E]">
                        Receipt
                    </span>
                </h2>
                <div className="flex gap-5 flex-wrap">
                    {trendCard.map(item => <Trendcard item={item} />)}
                </div>
                <div className="text-center mt-17">
                    <Button title={"ALL Receipt"} />
                </div>
            </div>
        </section>
    )
}

export default Trending
