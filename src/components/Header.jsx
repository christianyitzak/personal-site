import { NavLink } from "react-router";

function Header() {
    return (
        <header className="p-5 flex justify-between max-w-2xl mx-auto">
            {/* <div className="text-[#b4b4b4] flex gap-2 text-sm">
                <NavLink to="/" className="py-1 px-2 rounded-sm">
                    Home
                </NavLink>

                <NavLink to="/projects" className="py-1 px-2 rounded-sm">
                    Projects
                </NavLink>
            </div> */}

            <div>
                <p className="text-[#b4b4b4] text-sm font-semibold">
                    Christian Yitzak
                </p>
            </div>

            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#b4b4b4"
                >
                    <path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z" />
                </svg>
            </button>
        </header>
    );
}

export default Header;
