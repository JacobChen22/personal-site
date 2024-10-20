'use client';

import clsx from "clsx";

export default function NavBar({windowPosition}: { windowPosition: number }) {

    const menus = [{
        name: 'ABOUT',
        isActive: windowPosition <= 120
    }, {
        name: 'EXPERIENCES',
        isActive: windowPosition > 120 && windowPosition <= 1300
    }, {
        name: 'PROJECTS',
        isActive: windowPosition > 1300
    }];

    return (
        <ul className="nav hidden lg:block mt-16 w-max text-xs">
            {
                menus.map((menu) => {
                    return (
                        <li key={menu.name}>
                            <a className={clsx('group flex items-center py-3', menu.isActive && 'active')}
                               href={'#' + menu.name.toLowerCase()}>
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 group-hover:w-16 group-hover:bg-slate-600
                                group-focus-visible:bg-slate-600
                                transition-all motion-reduce:transform-none"/>
                                <span className="nav-text text-slate-400 group-hover:text-slate-600">{menu.name}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}