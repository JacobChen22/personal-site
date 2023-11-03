import SocialLink from "@/app/ui/social-link";
import About from "@/app/ui/about";
import Experience from "@/app/ui/experience";

export default function Home() {
    return (
        <div className="min-h-screen mx-auto max-w-screen-xl md:px-12 lg:px-24 lg:py-0 px-6 py-12">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <div
                    className="lg:flex lg:sticky lg:top-0 lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:max-h-screen">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Jacob Chen</h1>
                        <h2 className="text-lg font-medium mt-3 tracking-tight sm:text-xl">Fullstack Engineer</h2>
                        <p>I build SaaS platform products</p>
                    </div>

                    <SocialLink/>
                </div>

                <div className="pt-24 lg:w-1/2 lg:py-24">
                    <About/>
                    <Experience/>
                    <p className="mb-16 md:mb-24 lg:mb-36">projects</p>
                    <footer className="max-w-md pb-16 text-sm sm:pb-0">
                        <p>Coded in Jetbrains WebStorm by yours truly. Built with Next.js and Tailwind CSS based on
                            React.js, deployed with Vercel(Thanks to Vercel).
                            All text is set in the Inter typeface.</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
