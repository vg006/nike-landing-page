import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoe8} from "../assets/images/index.js";

const SuperQuality = () => {
    return (
        <section
            id={`about-us`}
            className={`flex justify-between items-center max-lg:flex-col gap-10 w-full max-container`}>
            <div
                className={`flex flex-1 flex-col`}>

                <h2
                    className={`font-palanquin text-4xl capitalize font-bold lg:max-w-lg`}>
                    We provide you
                    <br/>
                    <span
                        className={`text-coral-red inline-block mt-3`}>
                        Super
                    </span>
                    <span
                        className={`text-coral-red inline-block mt-3`}>
                        Quality
                    </span> Shoes
                </h2>

                <p
                    className={`mt-4 lg:max-w-lg info-text`}>
                    Ensuring the best quality for our customers is our top priority. We provide you with the best
                    quality shoes that are durable and comfortable. We ensure that our products are made from the best
                    materials and are designed to last.
                </p>

                <p
                    className={`mt-6 lg:max-w-lg info-text`}>
                    Our shoes are designed to provide you with the best comfort and style.
                </p>
                <div
                    className={`mt-11`}>
                    <Button label={`View Details`}/>
                </div>
            </div>

            <div
                className={`flex flex-1 justify-center items-center`}>
                <img
                    src={shoe8}
                    alt={`shoe`}
                    width={570}
                    height={520}
                    className={`object-contain`}/>
            </div>
        </section>
    )
}

export default SuperQuality
