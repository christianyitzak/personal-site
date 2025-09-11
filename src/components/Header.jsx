import { NavLink } from "react-router";

function Header() {
    return (
        <header className="p-5 flex justify-between">
            <div className="text-[#b4b4b4] flex gap-5 text-sm">
                <NavLink to="/" className="py-1 px-2 rounded-xs">
                    Home
                </NavLink>
                <NavLink to="/about" className="py-1 px-2 rounded-xs">
                    About
                </NavLink>
                <NavLink to="/blog" className="py-1 px-2 rounded-xs">
                    Blog
                </NavLink>
                <NavLink to="/projects" className="py-1 px-2 rounded-xs">
                    Projects
                </NavLink>
            </div>

            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#b4b4b4"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#b4b4b4"
                    className="size-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                </svg>
            </button>
        </header>
    );
}

export default Header;
