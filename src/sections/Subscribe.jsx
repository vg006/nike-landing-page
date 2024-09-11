import Button from "../components/Button.jsx";
let counter = 0;
const Subscribe = () => {
    counter = counter + 1;
    return (
        <section className={`max-container flex justify-between items-center max-lg:flex-col gap-10`}
                 id={`contact-us`}>

            <h3 className={`font-palanquin text-4xl leading-normal font-bold sm:text-center lg:max-w-md`}>

                Subscribe to our newsletter
                <span className={`text-coral-red`}> Updates</span>, <span className={`text-coral-red`}> Offers </span> and <span className={`text-coral-red`}> more
                </span>
            </h3>
            <div
                className={`lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full`}>
                <input
                    type={`text`}
                    placeholder={`subscribe@nike.com`}
                    className={`input`}/>
                <div
                    className={`flex max-sm:justify-end items-center max-sm:w-full`}>
                    <Button
                        label={`Subscribe`}
                        fullWidth={false}/>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
