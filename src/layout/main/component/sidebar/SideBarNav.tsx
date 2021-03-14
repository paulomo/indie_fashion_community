import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';

import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import BarChartIcon from '@material-ui/icons/BarChartRounded';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconProducts from '@material-ui/icons/LocalMall';
import IconLocation from '@material-ui/icons/LocationOn';
import { FaUser, FaRegBell } from "react-icons/fa";
import { Theme } from '../../../../theme/light';
import SidebarNavItems from './SidebarNavItems';


export interface SidebarNavProps {
  isCollapsed: boolean;
}

const SidebarNav = (props: SidebarNavProps) => {
  const { isCollapsed } = props;
  const classes = useStyles();

  const topLevel = [
    {
      name: 'Dashboard',
      // link: CommonRoutes.dashboard,
      Icon: IconDashboard,
    },
    {
      name: 'Analytics',
      Icon: BarChartIcon,
      items: [
        {
          name: 'Product',
          // link: AnalyticRoute.productAnalytics,
        },
        {
          name: 'Sale',
          // link:  AnalyticRoute.saleAnalytics,
        },
        {
          name: 'Customer',
          // link:  AnalyticRoute.customerAnaltics,
        },
      ],
    },
    {
      name: 'Report',
      Icon: AssessmentOutlinedIcon,
      items: [
        {
          name: 'Product',
          // link: ReportRoute.productReports,
        },
        {
          name: 'Sale',
          // link: ReportRoute.saleReports,
        },
        {
          name: 'Customer',
          // link: ReportRoute.customerReports,
        },
      ],
    },
    {
      name: 'Locations',
      // link: LocationRoute.locationContainer,
      Icon: IconLocation,
    },
    {
      name: 'Employees',
      // link: EmployeeRoute.employeeList,
      Icon: IconProducts,
    },
    {
      name: 'Products',
      // link: ProductRoute.productContainer,
      Icon: IconProducts,
    },
    // {
    //   name: 'Wallet',
    //   link: WalletRoute.walletContainer,
    //   Icon: AccountBalanceWalletOutlinedIcon,
    // },
    {
      name: 'Account',
      // link: EmployeeRoute.employee,
      Icon: FaUser,
    },
    {
      name: 'Setting',
      // link: CommonRoutes.setting,
      Icon: SettingsApplicationsOutlinedIcon,
    },
  ];

  return (
    <div>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={topLevel} />
      </List>

      {/* <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Basic Functionality
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsCoreModules} />
      </List> */}
    
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navList: {
      // width: theme.sidebar.width,
      fontSize: '1em',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      // backgroundColor: '#e3b546'
    },
    navListHeader: {
      textAlign: 'center',
      padding: 25
    },
    // iconFeatures: {
    //   color: '#95de3c',
    // },
    // iconDocs: {
    //   color: '#0abde3',
    // },
    // iconSupporters: {
    //   color: '#e3b546',
    // },
    // iconDiscuss: {
    //   color: '#ccc',
    // },
  })
);

export { SidebarNav };
