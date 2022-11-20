import {
  Box,
  Chip,
  Divider,
  List,
  Sheet,
  Typography,
  CircularProgress,
} from "@mui/joy";
import Layout from "../layotus/main";
import { CreateApplication } from "../components/Create";
import { useApplications } from "../hooks/useApplication";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const details = useApplications();

  return (
    <>
      <CreateApplication />

      <Layout.Main>
        {details.isLoading && (
          <CircularProgress
            style={{
              margin: "auto",
              width: "100%",
              top: "50%",
            }}
          />
        )}

        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {details.data && (
            <>
              {details.data.map(
                (application: {
                  _id: string;
                  name: string;
                  description: string;
                  currentStatus: string;
                  owner: string;
                }) => {
                  return (
                    <>
                      <Sheet
                        key={application._id}
                        component="li"
                        variant="outlined"
                        sx={{
                          borderRadius: "sm",
                          p: 2,
                          listStyle: "none",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", gap: 2 }}
                          component={Link}
                          style={{ textDecoration: "none" }}
                          to={`/app/${application._id}`}
                        >
                          <Box>
                            <Typography>{application.name}</Typography>
                            <Typography level="body3">
                              Application Type
                            </Typography>
                          </Box>
                        </Box>
                        <Divider component="div" sx={{ my: 2 }} />

                        <Typography level="body2">
                          {application.description}
                        </Typography>
                        <Divider component="div" sx={{ my: 2 }} />

                        <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
                          <Chip color="primary" size="sm" variant="outlined">
                            {application.currentStatus}
                          </Chip>
                        </Box>
                      </Sheet>
                    </>
                  );
                }
              )}
            </>
          )}
        </List>
      </Layout.Main>
    </>
  );
};
