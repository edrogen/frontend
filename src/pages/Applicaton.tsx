import Layout from "../layotus/main";
import Chart from "react-apexcharts";
import { Box, List, Sheet, Chip } from "@mui/joy/";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@mui/joy";
import { CreateApplication } from "../components/Create";

export const ApplicationPage = () => {
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
        <Breadcrumbs>
          <Link to="/" component={ReactRouterLink}>
            Home
          </Link>

          <Link to="/" component={ReactRouterLink}>
            Application
          </Link>
        </Breadcrumbs>

        <Box sx={{ mt: 2 }}>
          <Typography level="h2">Application Name</Typography>
          <Typography level="body1" sx={{ mt: 2 }}>
            Application Description
          </Typography>
          <Chip
            color="primary"
            disabled={false}
            size="md"
            variant="outlined"
            sx={{ mt: 3 }}
          >
            Application Status
          </Chip>
        </Box>

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
              <Chart options={a.options} series={a.series} type="bar" />
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
              <Chart options={a.options} series={a.series} type="bar" />
            </Box>
          </Sheet>
        </List>
      </Layout.Main>
    </>
  );
};
