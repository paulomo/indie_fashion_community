import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Theme } from "../../../../theme/light";
import Logo from "../../../../views/common/images/clothme-logo-for-saas.png";
import { SidebarNav } from "./SideBarNav";

interface SidebarProps {
  onToggleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDesktop: boolean;
  isMobile: boolean;
  isSidebarCollapsedDesktop: boolean;
  isSidebarOpenMobile: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { isDesktop, isSidebarCollapsedDesktop } = props;

  const classes = useStyles(props);

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <Link to="/" className={classes.sidebarTitleLink}>
          <img src={Logo} className="w-24 h-10 mt-14" />
        </Link>
      </div>
      <SidebarNav isCollapsed={isDesktop && isSidebarCollapsedDesktop} />
    </aside>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRight: 2,
    // color: theme.sidebar.color, //sidebar main text color
    // background: theme.sidebar.background, //sidebar background color
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  sidebarTitleLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    // '&:hover': {
    //   '& $logo': {
    //     color: '#fff',
    //   },
    // },
  },
  logo: {
    color: theme.palette.primary.main,
  },
  title: (props: SidebarProps) => ({
    // fontSize: '20px',
    // fontWeight: 400,
    position: 'relative',
    overflow: 'visible',
    marginLeft: '5px',
    display: props.isDesktop && props.isSidebarCollapsedDesktop ? 'none' : 'block',
  }),
  name: {},
  tagline: {
    fontSize: 8,
    fontWeight: 'bold',
    position: 'absolute',
    top: '100%',
    marginTop: -5,
    // background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: 2,
    padding: '1px 3px',
    right: 0,
  },
}));

export { Sidebar };
