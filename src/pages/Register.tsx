import { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import axios from "axios";
import { AppConfig } from "../config";
import { toast } from "react-hot-toast";

export function RegisterPage() {
  const [userMail, setUserMail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async () => {
    setIsLoading(true);
    await axios({
      method: "post",
      url: `${AppConfig.BACKEND_API}/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: userMail,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    })
      .then(function (response) {
        localStorage.setItem("session", JSON.stringify(response.data));
        toast.success("Registration success");
        setTimeout(function () {
          window.location.href = "/dashboard";
        }, 2000);
      })
      .catch(function (error) {
        toast.success("Something went wrong");
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
            <Typography level="body2">
              Create a new account to continue.
            </Typography>
          </div>

          <TextField
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            label="First Name"
          />
          <TextField
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="doe"
            label="Last Name"
          />

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
            Sign Up
          </Button>
          <Typography
            endDecorator={<Link href="/login">Sign In</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Already have a account ?
          </Typography>
        </Sheet>
      </main>
    </>
  );
}
