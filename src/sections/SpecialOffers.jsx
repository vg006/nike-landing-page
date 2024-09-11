import Button from "../components/Button.jsx";
import {offer} from "../assets/images/index.js";
import {arrowRight} from "../assets/icons/index.js";

const SpecialOffers = () => {
    return (
        <section
            className={`flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container`}>
            <div
                className={`flex flex-1 justify-center items-center`}>

                <img
                    src={offer}
                    alt={`offers`}
                    width={570}
                    height={520}
                    className={`object-contain w-full`}/>
            </div>
            <div>
                <h2
                    className={`font-palanquin text-4xl capitalize font-bold lg:max-w-lg`}>
                    <span
                        className={`text-coral-red inline-block mt-3`}>
                        Special
                    </span> Offers
                </h2>

                <p
                    className={`mt-4 lg:max-w-lg info-text`}>
                    Embark on a journey of style and comfort with our special offers. We provide you with the best deals on our products. Our special offers are designed to provide you with the best value for your money.
                </p>

                <p
                    className={`mt-6 lg:max-w-lg info-text`}>
                    Our special offers are designed to provide you with the best value for your money. We ensure that our products are made from the best materials and are designed to last.
                </p>
                <div
                    className={`mt-11 flex flex-wrap gap-5`}>
                    <Button
        `                label={`Shop Now`}
                        iconURL={arrowRight} />
                    <Button
                        label={`Learn more`}
                        bgcolor={`bg-white`}
                        bordercolor={`border-slate-gray`}
                        textcolor={`text-slate-gray`} />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers
