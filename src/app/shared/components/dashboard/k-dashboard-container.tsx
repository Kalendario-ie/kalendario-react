import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import KDashboardContent from 'src/app/shared/components/dashboard/k-dashboard-content';
import KDashboardSidebar, {SideBarLinks} from 'src/app/shared/components/dashboard/k-dashboard-sidebar';
import {KFlexRow} from 'src/app/shared/components/flex';
import {useCurrentUser} from 'src/app/shared/context-providers/auth-auto-login';
import {userSelectors} from 'src/app/store/admin/users';
import {selectSidenavOpen, setShowDashboardToggle, toggleDashboardSidenav} from 'src/app/store/ui';

interface DashboardContainerProps {
    links: SideBarLinks;
    children?: React.ReactNode;
}

const KDashboardContainer: React.FunctionComponent<DashboardContainerProps> = (
    {
        links,
        children
    }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowDashboardToggle(true));
        return () => {
            dispatch(setShowDashboardToggle(false));
        };
    }, [dispatch]);

    const isOpen = useSelector(selectSidenavOpen);
    const toggleSideNav = () => {
        dispatch(toggleDashboardSidenav())
    }

    const [_, user] = useCurrentUser();

    return (
        <>
            {user &&
            <KFlexRow align={'stretch'} className="dashboard-container">
                <KDashboardSidebar
                    links={links}
                    isOpen={isOpen}
                    toggleSideNav={toggleSideNav}
                    user={user}
                />
                <KDashboardContent>
                    {children}
                </KDashboardContent>
            </KFlexRow>
            }
        </>
    )
}


export default KDashboardContainer;
