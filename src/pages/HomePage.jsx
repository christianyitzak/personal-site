import Header from "../components/Header";
import { Link } from "react-router";
function HomePage() {
    return (
        <>
            <Header />

            <section className="p-5 max-w-2xl mx-auto">
                <h1 className="text-[#dedede] text-3xl font-bold mb-3">
                    hey, chris here ✌️
                    <span className="text-[#83c5fc]">software engineer</span> ,
                    love building web and apps!
                </h1>
            </section>

            <section className="grid grid-cols-1 p-5">
                <div className="bg-[#141515] p-10 rounded-3xl">
                    <img
                        src="gradient.png"
                        alt=""
                        className="rounded-2xl mb-3"
                    />

                    <p className="text-[#ffffffcc] text-2xl font-semibold mb-1">
                        ergon creative
                    </p>

                    <div className="flex justify-between items-center">
                        <p className="text-[#ffffff4d] text-sm">
                            Software Engineer
                        </p>
                        <p className="text-[#ffffffcc] text-sm">/ now</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
