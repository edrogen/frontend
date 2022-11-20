import Layout from "../layotus/main";
import Chart from "react-apexcharts";
import { Box, List, Sheet, Chip, CircularProgress, Alert } from "@mui/joy/";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@mui/joy";
import { CreateApplication } from "../components/Create";
import { useApplicationDetails } from "../hooks/useApplicationDetails";
import { useParams } from "react-router-dom";
import { ApplicationStatus } from "../enum/application";
import { PendingState } from "../components/pending";

export const ApplicationPage = () => {
  const { id } = useParams();
  const app = useApplicationDetails(id!);

  const a = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <>
      <CreateApplication />

      <Layout.Main>
        {app.isLoading && (
          <CircularProgress
            style={{
              margin: "auto",
              width: "100%",
              top: "50%",
            }}
          />
        )}

        {app.data && (
          <>
            <Breadcrumbs>
              <Link to="/" component={ReactRouterLink}>
                Home
              </Link>

              <Link to="/" component={ReactRouterLink}>
                {app.data?.app?.name}
              </Link>
            </Breadcrumbs>

            <Box sx={{ mt: 1 }}>
              <Typography level="h2" style={{ fontWeight: "bold" }}>
                {app.data?.app?.name}
              </Typography>
              <Typography level="body1" sx={{ mt: 2 }}>
                {app.data?.app?.description}
              </Typography>
              <Chip
                color="primary"
                disabled={false}
                size="md"
                variant="outlined"
                sx={{ mt: 3 }}
              >
                {app.data?.app?.currentStatus}
              </Chip>
            </Box>

            {app.data?.app?.currentStatus === ApplicationStatus.PENDING && (
              <>
                <PendingState appid={app.data?.app?._id} />
              </>
            )}


            {app.data?.app?.currentStatus === ApplicationStatus.VALIDATING_DATA && (
              <>
                <PendingState appid={app.data?.app?._id} />
              </>
            )}

            <List
              sx={{
                mt: 4,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
                gap: 2,
              }}
            >
              <Sheet
                component="li"
                variant="outlined"
                sx={{
                  borderRadius: "sm",
                  p: 2,
                  listStyle: "none",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Chart
                    options={{
                      chart: {
                        id: "Request By Month",
                      },
                      xaxis: {
                        categories: app.data?.category,
                      },
                    }}
                    series={[
                      {
                        name: "month",
                        data: app.data?.data,
                      },
                    ]}
                    type="area"
                  />
                </Box>
              </Sheet>
              <Sheet
                component="li"
                variant="outlined"
                sx={{
                  borderRadius: "sm",
                  p: 2,
                  listStyle: "none",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Chart
                    options={{
                      chart: {
                        id: "Request By Month",
                      },
                      xaxis: {
                        categories: app.data?.category,
                      },
                    }}
                    series={[
                      {
                        name: "month",
                        data: app.data?.data,
                      },
                    ]}
                    type="radar"
                  />
                </Box>
              </Sheet>
            </List>
          </>
        )}
      </Layout.Main>
    </>
  );
};
