'use client';

import React from "react";

interface ProjectsHistory {
    year: number;
    name: string;
    company: string;
    technologies: string[];
}

const projects: ProjectsHistory[] = [
    {
        year: 2024,
        name: 'ETO Plus',
        company: 'ETO Markets',
        technologies: ['Node.js', 'Nest.js', 'Postgre', 'AWS MSK', 'AWS SQS']
    },
    {
        year: 2024,
        name: 'ETO CRM',
        company: 'ETO Markets',
        technologies: ['Java', 'Spring Framework', 'Postgre']
    },
    {
        year: 2023,
        name: 'Zhaohu Document',
        company: 'China Merchants Bank',
        technologies: ['Java', 'Spring Framework', 'ElasticSearch', 'AWS S3']
    },
    {
        year: 2022,
        name: 'SaaS middle ware',
        company: 'China Merchants Bank',
        technologies: ['Java', 'Spring Framework', 'MySQL']
    },
    {
        year: 2021,
        name: 'CMB OA Portal',
        company: 'China Merchants Bank',
        technologies: ['Java', 'Spring Framework', 'ElasticSearch', 'Redis', 'RabbitMQ', 'MySQL']
    },
    {
        year: 2021,
        name: 'Insurance Recommend System',
        company: 'Manulife Financial',
        technologies: ['Java', 'SpringBoot', 'Apigee', 'AzureDB']
    },
    {
        year: 2020,
        name: 'Insurance Sale and Claim System',
        company: 'Manulife Financial',
        technologies: ['Java', 'Python', 'WebSphere', 'Oracle']
    },
    {
        year: 2019,
        name: 'General Workflow System',
        company: 'Pactera(CMB OD)',
        technologies: ['Java', 'Spring', 'Activiti', 'RabbitMQ', 'MySQL']
    },
    {
        year: 2018,
        name: 'ECommerce System',
        company: 'Chengdu Kailiheng',
        technologies: ['Java', 'Spring', 'Dubbo', 'Redis', 'MySQL']
    },
    {
        year: 2017,
        name: 'Financial CRM',
        company: 'Chengdu Kailiheng',
        technologies: ['Java', 'Spring', 'MyBatis', 'MySQL']
    },
    {
        year: 2016,
        name: 'Enterprise Management System',
        company: 'Chengdu Kailiheng',
        technologies: ['Java', 'Spring', 'MyBatis', 'MySQL']
    },
    {
        year: 2015,
        name: 'Static Enterprise Portal',
        company: 'Chengdu Kailiheng',
        technologies: ['Java', 'Struts2', 'JSP']
    },
];

export default function Home() {

    return (
        <div className="min-h-screen mx-auto max-w-screen-xl md:px-12 lg:px-24 lg:py-0 px-6 py-12">
            <div className="lg:py-24">
                <a href="/"
                   className="mb-2 inline-flex items-center font-semibold leading-tight text-cyan-700 hover:text-cyan-500">
                    ← Back to Jacob Chen</a>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">All Projects</h1>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Project</th>
                        <th>Made at</th>
                        <th>Built with</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project, index) => {
                        return (
                            <tr key={index}>
                                <td>{project.year}</td>
                                <td className="font-bold">{project.name}</td>
                                <td>{project.company}</td>
                                <td>
                                    <ul className="flex flex-wrap -translate-y-1.5">
                                        {project.technologies.map((t, i) => {
                                            return (
                                                <li className="mr-1.5 mt-2" key={index}>
                                                    <div className="flex items-center rounded-full bg-cyan-200/40
                                                        px-3 py-1 text-xs font-medium leading-5 text-cyan-800">{t}</div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
