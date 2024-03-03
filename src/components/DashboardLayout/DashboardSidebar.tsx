import BarChartIcon from "@mui/icons-material/BarChart";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { APPBAR_ZINDEX } from "constants/constants";
import AppRoutes from "navigation/appRoutes";

import NavItem from "./NavItem";

const items = [
  {
    href: AppRoutes.DASHBOARD,
    icon: <BarChartIcon fontSize="small" />,
    title: "Dashboard",
  },
];

export function DashboardSidebar(props: any) {
  const { open, onClose } = props;
  const lgUp = useMediaQuery(
    (theme: any) => {
      return theme.breakpoints.up("lg");
    },
    {
      defaultMatches: true,
      noSsr: false,
    },
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <Box sx={{ flexGrow: 1, color: "#000", fontSize: "0.8rem", my: 3 }}>
          {items.map((item) => {
            return (
              <NavItem
                key={item.title}
                href={item.href}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        open
        anchor="left"
        PaperProps={{
          sx: {
            width: 200,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      PaperProps={{
        sx: {
          color: "#000",
          width: 200,
        },
      }}
      sx={{
        zIndex: (theme) => {
          return theme.zIndex.appBar + APPBAR_ZINDEX;
        },
      }}
      variant="temporary"
      onClose={onClose}
    >
      {content}
    </Drawer>
  );
}

export default { DashboardSidebar };
