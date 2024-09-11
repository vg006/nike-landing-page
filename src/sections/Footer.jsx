import {copyrightSign} from "../assets/icons/index.js";

const Footer = () => {
    return (
        <footer
            className={`max-container`}>
            <div
                className={`flex justify-center items-center gap-5 flex-wrap max-lg:flex-col`}>
                <img
                    src={copyrightSign}
                    alt={`copy right sign`}
                    width={20}
                    height={20}
                    className={`rounded`}/>
                <p
                    className={`text-slate-gray font-montserrat`}>Copyright. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
