import { Box, Chip, Divider, List, Sheet, Typography } from "@mui/joy";
import Layout from "../layotus/main";
import { CreateApplication } from "../components/Create";

export const HomePage = () => {
  return (
    <>
      <CreateApplication />

      <Layout.Main>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {[...Array(3)].map((_, index) => (
            <Sheet
              key={index}
              component="li"
              variant="outlined"
              sx={{
                borderRadius: "sm",
                p: 2,
                listStyle: "none",
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box>
                  <Typography>Application Name</Typography>
                  <Typography level="body3">Application Type</Typography>
                </Box>
              </Box>
              <Divider component="div" sx={{ my: 2 }} />

              <Typography level="body2">The Description</Typography>
              <Divider component="div" sx={{ my: 2 }} />

              <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
                <Chip color="primary" size="sm" variant="outlined">
                  Current Status
                </Chip>
              </Box>
            </Sheet>
          ))}
        </List>
      </Layout.Main>
    </>
  );
};
