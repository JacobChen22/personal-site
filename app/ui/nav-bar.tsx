'use client';

import clsx from "clsx";

export default function NavBar({windowPosition}: { windowPosition: number }) {

    const menus = [{
        name: 'ABOUT',
        isActive: windowPosition <= 120
    }, {
        name: 'EXPERIENCES',
        isActive: windowPosition > 120 && windowPosition <= 1200
    }, {
        name: 'PROJECTS',
        isActive: windowPosition > 1200
    }];

    return (
        <ul className="nav hidden lg:block mt-16 w-max text-xs">
            {
                menus.map((menu) => {
                    return (
                        <li key={menu.name}>
                            <a className={clsx('group flex items-center py-3', menu.isActive && 'active')}
                               href={'#' + menu.name.toLowerCase()}>
                                <span
                                    className="mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transform-none"></span>
                                <span>{menu.name}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}