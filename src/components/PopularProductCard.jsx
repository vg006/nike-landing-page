import {star} from "../assets/icons/index.js";

const PopularProductCard = ({imgURL, name, price}) => {
    return (
        <div
            className={`flex flex-1 flex-col w-full px-5 py-3 items-center max-sm:w-full`}>
            <img
                src={imgURL}
                alt={name}
                className={`w-[280px] h-[280px]`}/>

            <div
                className={`mt-8 flex justify-start gap-2.5`}>
                <img
                    src={star}
                    alt={`rating`}
                    width={25}
                    height={25}/>
                <p className={`font-montserrat text-xl leading-normal text-slate-gray`}>
                    4.5
                </p>
                <br/>
            </div>
            <h3
                className={`mt-2 text-2xl leading-normal font-semibold font-palanquin`}>
                {name}
            </h3>
            <p
                className={`mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal`}>
                {price}
            </p>

        </div>
    )
}

export default PopularProductCard