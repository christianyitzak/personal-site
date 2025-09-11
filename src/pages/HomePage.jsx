import Header from "../components/Header";
import { Link } from "react-router";
function HomePage() {
    return (
        <>
            <Header />

            <section className="p-5 max-w-2xl mx-auto">
                <h1 className="text-[#eee] text-3xl font-bold mb-2">
                    Christian Yitzak
                </h1>
                <p className="text-[#b4b4b4] leading-relaxed mb-3">
                    I'm a frontend developer from Indonesia, love building web
                    and app!
                </p>
                <div className="flex gap-3.5">
                    <Link
                        to="mailto:christianyitzak@gmail.com"
                        className="bg-[#191919] p-2 rounded-xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="white"
                            className="h-5 w-5"
                        >
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                        </svg>
                    </Link>
                    <Link
                        to="https://www.instagram.com/christian.yitzak/"
                        className="bg-[#191919] p-2 rounded-xl"
                    >
                        <svg
                            stroke="currentColor"
                            fill="white"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                    </Link>
                    <Link
                        to="https://github.com/christianyitzak"
                        className="bg-[#191919] p-2 rounded-xl"
                    >
                        <svg
                            stroke="currentColor"
                            fill="white"
                            strokeWidth="0"
                            viewBox="0 0 496 512"
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                    </Link>
                </div>
            </section>

            <section className="p-5 max-w-2xl mx-auto">
                <p className="text-[#eee] text-2xl font-semibold">About</p>
                <p className="text-[#b4b4b4] mb-3 text-sm">
                    a glimpse into my life.
                </p>
                <p className="text-[#eee]">
                    Hey, I'm Chris! I'm a frontend developer who wants to become
                    a fullstack developer. I love creating websites and apps
                    that no one asked for, haha. Since I was a kid, I've always
                    enjoyed playing with computers, and now, I get to work with
                    them to make a living. Even though I don't play games
                    anymore, I find building websites and apps much more
                    interesting these days! :D
                </p>
            </section>

            <section className="p-5 max-w-2xl mx-auto">
                <p className="text-[#eee] text-2xl font-semibold">Work</p>
                <p className="text-[#eee] mb-3">
                    I specialized in frontend development for website using
                    react.
                </p>

                <div className="flex item-center justify-between ">
                    <div className="flex items-center gap-5">
                        <div className="w-[50px]">
                            <img
                                src="ergon-logo.png"
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <p className="text-[#eee]">Frontend Developer</p>
                            <p className="text-[#b4b4b4] text-sm">
                                Ergon Creative Agency
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#b4b4b4] text-sm">2025 - Now</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
