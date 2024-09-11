import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {statistics, shoes} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
import {useState} from "react";


const Hero = () => {
    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)
    return (
        <section
            className={`w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container`}>

            <div
                className={`relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28`}>
                <p
                    className={`text-xl font-montserrat text-coral-red`}>
                    Our Summer collections
                </p>
                <h1
                    className={`mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold`}>
                    <span
                        className={`xl:bg-white xl:whitespace-nowrap relative z-10 pr-1`}>
                        The New arrivals
                    </span>
                    <br/>
                    <span
                        className={`text-coral-red inline-block mt-3`}>
                        Nike
                    </span> Shoes
                </h1>

                <p
                    className={`font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm`}>
                    Discover the latest collection of Nike shoes, designed for style and performance.
                </p>

                <Button label={`Shop Now`} iconURL={arrowRight}/>
                <div
                    className={`flex justify-starts items-start flex-wrap w-full mt-20 gap-16`}>

                    {statistics.map((stat) => (
                        <div
                            key={stat.label}>
                            <p className={`text-4xl font-palanquin font-bold`}>{stat.value}</p>
                            <p className={`leading-7 font-montserrat text-slate-gray`}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center rounded-full`}>

                <img
                    className={`relative z-10 object-contain max-xl:h-[300px]`}
                    src={bigShoeImage}
                    alt={`shoe collection`}
                    width={610}
                    height={500} />

                <div className={`flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6`}>
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                                bigShoeImage={bigShoeImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
