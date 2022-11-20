import Layout from "../layotus/main";
import Chart from "react-apexcharts";
import {
  Box,
  List,
  Sheet,
  Chip,
  CircularProgress,
  Button,
  Alert,
  Modal,
  ModalClose,
} from "@mui/joy/";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@mui/joy";
import { CreateApplication } from "../components/Create";
import { useApplicationDetails } from "../hooks/useApplicationDetails";
import { useParams } from "react-router-dom";
import { ApplicationStatus } from "../enum/application";
import { PendingState } from "../components/pending";
import { useState } from "react";
import httpConfig from "../http-common";

export const ApplicationPage = () => {
  const { id } = useParams();
  const app = useApplicationDetails(id!);
  const [open, setOpen] = useState(false);
  const [appKey, setAppKey] = useState(null);

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

  const getToken = () => {
    const config = {
      method: "post",
      url: "/api-keys",
      data: JSON.stringify({
        application: app.data?.app?._id,
      }),
    };

    httpConfig(config)
      .then(function (response) {
        setAppKey(response.data?.keyId);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 800,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Generate API key for {app.data?.app?.name}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog
            with an optional <code>aria-describedby</code> attribute.
          </Typography>

          <Button sx={{ mt: 5 }} onClick={() => getToken()}>
            Generate
          </Button>

          <br />
          <br />
          {appKey && (
            <>
              <code>{appKey}</code>
            </>
          )}
        </Sheet>
      </Modal>

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

            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(true)}
              sx={{ mt: 3 }}
            >
              Generate API key
            </Button>

            {app.data?.app?.currentStatus === ApplicationStatus.PENDING && (
              <>
                <PendingState appid={app.data?.app?._id} />
              </>
            )}

            {app.data?.app?.currentStatus ===
              ApplicationStatus.VALIDATING_DATA && (
              <>
                <h1> validating data </h1>
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
