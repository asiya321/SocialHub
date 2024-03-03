/* eslint-disable react/jsx-sort-props */
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MUISelect from "@mui/material/Select";
import palette from "theme/palette";
import DateRangePicker from "./DateRangePicker";

type IMenuItem = {
  id: number;
  value: string;
};

interface ISelect {
  menuItems?: IMenuItem[];
  isDateRange?: boolean;
}

function Select(props: ISelect) {
  const { menuItems, isDateRange } = props;
  return (
    <Stack alignItems="center" direction="row" gap={2} width="100%">
      {isDateRange ? (
        <Box width="100%">
          <DateRangePicker />
        </Box>
      ) : (
        <MUISelect
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value=""
          fullWidth
          //   onChange={() => {}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuItems?.map((menu) => {
            return (
              <MenuItem key={menu.id} value={menu.value}>
                <em>{menu.value}</em>
              </MenuItem>
            );
          })}
        </MUISelect>
      )}

      <CancelIcon
        sx={{
          color: palette.secondary.lightGray,
        }}
      />
    </Stack>
  );
}

export default Select;
