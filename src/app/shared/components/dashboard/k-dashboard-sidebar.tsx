import React from "react"
import {Link} from "react-router-dom"
import KIcon from 'src/app/shared/molecules/KIcon';
import {useKHistory} from 'src/app/shared/util/router-extensions';

export interface SideBarLinks {
    [key: string]: [name: string, url: string, icon: string | undefined][]
}

interface KDashboardSidebarProps {
    links: SideBarLinks;
    isOpen: boolean;
}


const KDashboardSidebar: React.FunctionComponent<KDashboardSidebarProps> = (
    {
        links,
        isOpen
    }) => {
    const {location: {pathname}} = useKHistory();
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'} k-shadow-0 py-3`}>
            {Object.keys(links).map(key => {
                return (
                    <React.Fragment key={key}>
                        <h6 className="sidebar-heading">{key}</h6>
                        <ul className="list-clear">
                            {links[key].map(([name, url, icon]) => {
                                return (
                                    <li className="sidebar-list-item" key={name}>
                                        <Link to={url}
                                              className={`sidebar-link ${pathname === url ? ' active' : 'text-muted'}`}
                                        >
                                            {icon && <KIcon icon={icon}/>}
                                            {isOpen &&
                                            <span className="sidebar-link-title">{name}</span>
                                            }
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </React.Fragment>
                )
            })}
        </div>
    )
}


export default KDashboardSidebar;
