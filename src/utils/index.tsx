export const getStatus = (status: number) => {
  switch (status) {
    case 0:
      return "Created";
    case 1:
      return "Active";
    case 2:
      return "Inactive";
    case 3:
      return "Deleted";
    default:
      return "";
  }
};

export const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
