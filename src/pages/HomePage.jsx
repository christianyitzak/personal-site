import Header from "../components/Header";

function HomePage() {
    return (
        <>
            <Header />

            <section className="p-5">
                <h1 className="text-[#eee] text-3xl font-bold mb-2">
                    Christian Yitzak
                </h1>
                <p className="text-[#b4b4b4] leading-relaxed">
                    I'm a frontend developer from Indonesia, love building web
                    and app!
                </p>
            </section>
        </>
    );
}

export default HomePage;
