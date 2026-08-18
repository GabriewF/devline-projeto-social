import Footer from "../components/ui/Footer";
import About from "../components/views/About";
import Hero from "../components/views/Hero";
import Trajectory from "../components/views/Trajectory";

export default function Index() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-col grow gap-16 items-center *:w-full *:max-w-480">
                <Hero />
                <About />
                <Trajectory />
            </main>

            <Footer />
        </div>
    )
}
