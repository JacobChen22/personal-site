import Image from "next/image";

interface Project {
    projectLink: string,
    picture: string,
    title: string,
    description: string,
}

const projects: Project[] = [
    {
        projectLink: 'https://www.etoplus.co/',
        picture: '/etoplus.jpg',
        title: 'ETO Plus',
        description: 'Copy trading web application for ETO markets users. Support fully managed copy trading service and profit sharing calculation.',
    },
    {
        projectLink: 'https://portal.etocenter.com/',
        picture: '/etocrm.jpg',
        title: 'ETO CRM',
        description: 'Modern customer relation and agent management application for ETO markets agents and traders.',
    },
    {
        projectLink: 'https://jacob-chen.com/',
        picture: '/jacobchen.jpg',
        title: 'Personal site',
        description: 'Personal site built with Next.js and Vercel',
    },
];

export default function Project() {
    return (
        <section id="projects" className="mb-16 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12
            lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Projects</h2>
            </div>
            <div>
                <ol>
                    {projects.map((pro, index) => {
                        return (
                            <li className="mb-12" key={index}>
                                <a className="block" href={pro.projectLink} target="_blank">
                                    <div className="group grid lg:group-hover:opacity-50 lg:hover:!opacity-100
                                md:gap-4 pb-1 relative sm:gap-8 sm:grid-cols-10 transition-all">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition
                                    lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100 lg:group-hover:drop-shadow-lg"/>
                                        <div
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase text-slate-700
                                         tracking-wide sm:col-span-3">
                                            <Image
                                                src={pro.picture}
                                                alt={pro.title}
                                                width={140}
                                                height={48}
                                                className="rounded-md border-2 border-slate-200"
                                            />
                                        </div>
                                        <div className="z-10 sm:col-span-7">
                                            <h3 className="font-medium leading-snug group-hover:text-sky-700">
                                                <div>{pro.title}</div>
                                            </h3>
                                            <div className="mt-2 text-sm leading-normal text-slate-700">
                                                <p>{pro.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div>
                <a href="/projects">
                    <span className="border-b border-transparent pb-px transition hover:border-cyan-800 font-bold">View Full Projects →</span>
                </a>
            </div>
        </section>
    )
}