import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Layout from "../layotus/main";

export const HeaderComponent = () => {
  return (
    <>
      <Layout.Header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <IconButton
            variant="outlined"
            size="sm"
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" fontWeight="xl">
            Edroko
          </Typography>
        </Box>
        <Input
          size="sm"
          placeholder="Search anything…"
          startDecorator={<SearchRoundedIcon color="primary" />}
          endDecorator={
            <IconButton variant="outlined" size="sm" color="neutral">
              <Typography
                fontWeight="lg"
                fontSize="sm"
                textColor="text.tertiary"
              >
                /
              </Typography>
            </IconButton>
          }
          sx={{
            flexBasis: "500px",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          <IconButton
            size="sm"
            variant="outlined"
            color="primary"
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Box>
      </Layout.Header>
    </>
  );
};
