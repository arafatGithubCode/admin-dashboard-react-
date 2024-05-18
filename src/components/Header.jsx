/* eslint-disable react/prop-types */
import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 5px" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ m: "0 0 5px 5px" }}
        variant="h5"
        color={colors.greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
