import { useState } from "react";
import {
  Box,
  TextField,
  Textarea,
  Button,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";
import Layout from "../layotus/main";
import httpClient from "../http-common";
import { useApplications } from "../hooks/useApplication";
import { toast } from "react-hot-toast";

export const CreateApplication = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, isLoading] = useState(false);
  const applications = useApplications();

  const submitData = async () => {
    isLoading(true);
    const data = {
      name: name,
      description: description,
    };

    await httpClient
      .post("/application", data)
      .then((response) => {
        toast.success(`${response?.data?.name} created successfully`);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Unable to create application please contact admins");
      });

    applications.refetch();
    isLoading(false);
  };

  return (
    <>
      <Layout.SidePane>
        <Box
          sx={{
            p: 2,
            pb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontSize="lg"
            textColor="text.tertiary"
            textTransform="uppercase"
            letterSpacing="md"
            fontWeight="lg"
          >
            Create Application
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography level="body2" textColor="text.primary">
              Application Details
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
              <TextField
                placeholder="Application Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
              <Textarea
                placeholder="Application Description"
                minRows={3}
                sx={{ width: "100%" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography level="body2" textColor="text.primary">
              Application Type
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <RadioGroup name="education" defaultValue="any">
              <Radio label="Any" value="any" size="sm" />
              <Radio label="Super Market" value="super-market" size="sm" />
              <Radio label="Online Shop" value="online-shop" size="sm" />
            </RadioGroup>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button fullWidth onClick={() => submitData()} loading={loading}>
              Submit
            </Button>
          </Box>
        </Box>
      </Layout.SidePane>
    </>
  );
};
