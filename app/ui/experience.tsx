interface WorkingExperience {
    employmentDates: string,
    title: string,
    description: string[],
    usedTechnologies: string[]
}

const experiences: WorkingExperience[] = [
    {
        employmentDates: 'OCT·2021 — AUG·2023',
        title: 'Team Lead · China Merchants Bank',
        description: ['Built an OA SaaS platform, providing over 3,900 applications for more than 160,000 users those who are internal employees and company’s clients.',
            'Built a SaaS document product for replacing Confluence, also fulfilling employees cloud storage requirements.',
            'Implemented a bridge service for combining our SaaS platform service and third-party’s commercial SaaS platform (like Lark).'],
        usedTechnologies: ['Java', 'Spring Framework', 'TypeScript', 'React', 'Angular', 'Kafka', 'Elastic Search', 'Redis', 'MySQL']
    },
    {
        employmentDates: 'OCT·2020 — SEPT·2021',
        title: 'Software Engineer · Manulife Financial',
        description: ['Maintained internal insurance management system, adding features for new products.',
            'Developed an insurance recommendation system, providing preferred insurance product according to customer needs.',
            'Promoted agile development methods as an agile coach'],
        usedTechnologies: ['Java', 'Spring Framework', 'JavaScript', 'Oracle', 'Docker', 'Python']
    },
    {
        employmentDates: 'NOV·2018 — SEPT·2020',
        title: 'Software Engineer · China Merchants Bank(OD)',
        description: ['Built a new generation workflow system, which supports dynamic forms and process, reducing 50% paper-based approval processes.',
            'Built a set of REST APIs for workflow engine, providing open APIs to other microservices.'],
        usedTechnologies: ['Java', 'Spring Framework', 'TypeScript', 'Angular', 'RabbitMQ', 'Redis', 'Oracle']
    },
    {
        employmentDates: 'DEC·2015 — OCT·2018',
        title: 'Software Developer · Chengdu Kailiheng Technology',
        description: ['Built a B2C e-commerce website, selling fruits online.',
            'Built an enterprise management system, which is a customized inventory tracking system.'],
        usedTechnologies: ['Java', 'Spring Framework', 'JavaScript', 'CSS', 'MySQL']
    }
];

export default function Experience() {
    return (
        <section id="experience" className="mb-16 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12
            lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol>
                    {experiences.map((exp, index) => {
                        return (
                            <li className="mb-12" key={index}>
                                <div className="group grid lg:group-hover:opacity-50 lg:hover:!opacity-100
                                md:gap-4 pb-1 relative sm:gap-8 sm:grid-cols-10 transition-all">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition
                                    lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800 lg:group-hover:drop-shadow-lg"/>
                                    <div
                                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-3">
                                        {exp.employmentDates}
                                    </div>
                                    <div className="z-10 sm:col-span-7">
                                        <h3 className="font-medium leading-snug">
                                            <div>{exp.title}</div>
                                        </h3>
                                        <div className="mt-2 text-sm leading-normal">
                                            {exp.description.map((desc, index) => <p key={index}>{desc}</p>)}
                                        </div>
                                        <ul className="mt-2 flex flex-wrap">
                                            {exp.usedTechnologies.map((tech, index) => {
                                                return (
                                                    <li className="mr-1.5 mt-2" key={index}>
                                                        <div
                                                            className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </section>
    )
}