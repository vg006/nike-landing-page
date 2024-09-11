import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";

const Nav = () => {
    return (
        <header className={`padding-x py-8 absolute z-10 w-full`}>
            <nav className={`flex justify-between items-center max-container`}>
                <a
                    href="/"
                    className="text-2xl font-bold">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={30}/>
                </a>
                <ul
                    className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">

                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-lg text-slate-gray font-montserrat leading-normal">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div
                    className={`hidden max-lg:block`}>

                    <img
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25} />
                </div>
            </nav>
        </header>
    );
}
export default Nav;
