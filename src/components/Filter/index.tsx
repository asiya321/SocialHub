import { Stack } from "@mui/material";
import Select from "./Select";

function Filter() {
  const menuItems = [
    {
      id: 1,
      value: "menu",
    },
  ];
  return (
    <Stack direction="column" marginTop={2} rowGap={2}>
      <Stack direction="row" gap={4} width="100%">
        <Select menuItems={menuItems} />
        <Select menuItems={menuItems} />
      </Stack>

      <Stack direction="row" gap={4} width="100%">
        <Select menuItems={menuItems} />
        <Select menuItems={menuItems} />
      </Stack>

      <Stack direction="row" gap={4} width="100%">
        <Select menuItems={menuItems} />
        <Select isDateRange />
      </Stack>
    </Stack>
  );
}

export default Filter;
