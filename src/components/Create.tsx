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

export const CreateApplication = () => {
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
              <TextField placeholder="Application Name" fullWidth />
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
              <Textarea
                placeholder="Application Description"
                minRows={3}
                sx={{ width: "100%" }}
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
            <Button fullWidth>Submit</Button>
          </Box>
        </Box>
      </Layout.SidePane>
    </>
  );
};
