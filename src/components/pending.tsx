import {
  Alert,
  Sheet,
  Button,
  Box,
  Typography,
  LinearProgress,
} from "@mui/joy";
import { useState } from "react";
import axios from "axios";
import "../styles/file_input.css";
import { toast } from "react-hot-toast";
import { AppConfig } from "../config";
import { getAuthStorage } from "../utils/jwt-token";

export const PendingState = (appid: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    const session = getAuthStorage();

    try {
      const response = await axios({
        method: "post",
        url: `${AppConfig.BACKEND_API}/application/upload`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-app-id": appid?.appid,
          Authorization: `Bearer ${session?.token}`,
        },
      });
      console.log(response);

      toast.success(`file Uploaded successfully`);
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Alert color="warning" sx={{ mt: 5 }}>
        Your application is currently on Pending state. please upload files to
        continue.
      </Alert>
      <Box sx={{ mt: 2 }}>
        <Typography level="h4">Upload relevent Documents</Typography>
      </Box>

      <Sheet variant="outlined" sx={{ p: 5, mt: 4, borderRadius: 20 }}>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileSelect}
            className="custom-file-input"
          />

          <br />

          {isLoading && <LinearProgress sx={{ mt: 2 }} />}

          <Button type="submit" sx={{ mt: 3 }} loading={isLoading}>
            Upload File
          </Button>
        </form>
      </Sheet>

      <Button sx={{ mt: 3 }} color="success" size="lg">
        Continue to Next Step
      </Button>
    </>
  );
};
