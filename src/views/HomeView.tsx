import { Header, SearchForm } from "../components";

export const HomeView = () => {
    return (
        <>
            <Header />
            <main className="bg-gray-200 py-10 min-h-screen lg:bg-home bg-no-repeat bg-right-top lg:bg-home-xl">
                <div className="max-w-5xl mx-auto mt-10">
                    <div className="lg:w-1/2 px-10 lg:p-0 space-y-6">
                        <h1 className="text-6xl font-bold">
                            All your{" "}
                            <span className="text-cyan-400 mr-3 ">
                                Social Networks
                            </span>
                            in one link
                        </h1>
                        <p className="text-slate-800 text-xl">
                            Join over 200,000 developers sharing their social
                            networks. Share your TikTok, Facebook, Instagram,
                            YouTube, and more.
                        </p>
                        <SearchForm />
                    </div>
                </div>
            </main>
        </>
    );
};
