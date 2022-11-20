import { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import axios from "axios";
import { AppConfig } from "../config";
import { toast } from "react-hot-toast";

export function LoginPage() {
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async () => {
    setIsLoading(true);
    await axios({
      method: "post",
      url: `${AppConfig.BACKEND_API}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: userMail,
        password: password,
      },
    })
      .then(function (response) {
        localStorage.setItem("session", JSON.stringify(response.data));
        toast.success("Login success");
        setTimeout(function () {
          window.location.href = "/";
        }, 2000);
      })
      .catch(function (error) {
        toast.success("Invalid email or password");
        console.log(error);
      });
    setIsLoading(false);
  };

  return (
    <>
      <main>
        <Sheet
          sx={{
            width: 500,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
            mt: 30,
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            name="email"
            type="email"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
            placeholder="johndoe@email.com"
            label="Email"
          />
          <TextField
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button
            sx={{ mt: 1 }}
            loading={isLoading}
            onClick={() => submitLogin()}
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </>
  );
}
