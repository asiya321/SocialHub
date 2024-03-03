import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import useUserInfo from "hooks/useUserInfo";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "redux/user/auth";

function AccountPopover(props: any) {
  const { anchorEl, onClose, open, ...other } = props;
  const { setUserCredential } = useAuthActions();
  const navigate = useNavigate();
  const user = useUserInfo();
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      sx={{ top: "10px" }}
      onClose={onClose}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {user?.fullName}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setUserCredential({
              token: "",
              isLoggedIn: false,
            });
            navigate(AppRoutes.LOGIN);
          }}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
}

export default AccountPopover;
