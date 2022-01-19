import React from "react"
import {Link} from "react-router-dom"
import {AuthUser, PermissionModel, PermissionType} from 'src/app/api/auth';
import {KFlexColumn, KFlexRow} from 'src/app/shared/components/flex';
import AvatarImg from 'src/app/shared/components/primitives/avatar-img';
import KIcon from 'src/app/shared/components/primitives/k-icon';
import {useUserHasPermission} from 'src/app/shared/context-providers/auth-auto-login';
import {useKHistory} from 'src/app/shared/util/router-extensions';

export interface SideBarLinkItem {
    name: string;
    url: string;
    icon: string | undefined;
    permissionModel?: PermissionModel;
}

export interface SideBarLinks {
    [key: string]: SideBarLinkItem[]
}

interface KDashboardSidebarProps {
    links: SideBarLinks;
    isOpen: boolean;
    toggleSideNav: () => void;
    user: AuthUser;
}

export interface KDashboardSidebarLinkProps extends SideBarLinkItem {
    isOpen: boolean;
}


const KDashboardSidebarLink: React.FunctionComponent<KDashboardSidebarLinkProps> = (
    {
        isOpen,
        name,
        url,
        icon,
        permissionModel
    }) => {
    const {location: {pathname}} = useKHistory();
    const hasPermission = useUserHasPermission(PermissionType.view, permissionModel);

    return (
        <>
            {hasPermission &&
            <li className="sidebar-list-item">
                <Link to={url}
                      className={`sidebar-link ${pathname === url ? ' active' : 'text-muted'}`}
                >
                    {icon && <KIcon icon={icon}/>}
                    {isOpen &&
                    name
                    }
                </Link>
            </li>
            }
        </>
    )
}

const KDashboardSidebar: React.FunctionComponent<KDashboardSidebarProps> = (
    {
        links,
        isOpen,
        toggleSideNav,
        user
    }) => {

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'} k-shadow-0`}>
            <div className="sidebar-title">Kalendario</div>

            {isOpen &&
            <KFlexRow className="dashboard-avatar" align={'center'}>
                <AvatarImg className="m-1" size={4}/>
                <KFlexColumn justify={'center'}>
                    <div>{user.name}</div>
                    <div>admin</div>
                    {/*    TODO: UPDATE ADMIN TO CORRECT ROLE.*/}
                </KFlexColumn>
            </KFlexRow>
            }

            {Object.keys(links).map((key, i) => {
                return (
                    <React.Fragment key={key}>
                        {i > 0 && <hr/>}
                        <ul className="list-clear">
                            {links[key].map(({name, url, icon, permissionModel}, k) =>
                                <KDashboardSidebarLink isOpen={isOpen}
                                                       key={k}
                                                       name={name}
                                                       url={url}
                                                       icon={icon}
                                                       permissionModel={permissionModel}/>
                            )}
                        </ul>
                    </React.Fragment>
                )
            })}


            <div className="sidebar-bottom">
                <li className="sidebar-list-item sidebar-link text-muted" onClick={toggleSideNav}>
                    <KIcon icon={isOpen ? "toggle-on" : "toggle-off"}/>
                    {isOpen && "Toggle sidebar"}
                </li>
            </div>
        </div>
    )
}


export default KDashboardSidebar;
