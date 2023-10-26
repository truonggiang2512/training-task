import { Box, Button, Container, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { UserLoginFrm } from "../Utils/model";
import { useFormik } from "formik";
import * as yup from "yup";
import storage from "../Utils/storage";
import { TOKEN, defaultToken } from "../Utils/constant";
type Props = {};

const Login = (props: Props) => {
  let defaultAccount: UserLoginFrm = {
    email: "truonggiang@gmail.com",
    password: "123@DEV",
  };
  const loginFrm = useFormik<UserLoginFrm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Enter valid Email !"
        ),
      password: yup.string().required("password cannot be blank"),
    }),
    onSubmit: (values: UserLoginFrm) => {
      if (values.email === defaultAccount.email) {
        if (values.password === defaultAccount.password) {
          storage.set(TOKEN, defaultToken);
          window.location.href = "/product";
        } else {
          alert("Wrong password");
        }
      } else {
        alert("The email is not exits");
      }
    },
  });
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage: `url("https://img.freepik.com/free-vector/abstract-landscape-background-with-mountains-sunset_1048-14394.jpg?w=1380&t=st=1698227315~exp=1698227915~hmac=6a82cc70ee63cebd62e8fa6a75107a3ff429e4ebcb8d239c5dab9de610109d63")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ py: 25 }}>
        <Box
          sx={{
            px: { xs: 0, md: 20, xl: 90 },
          }}
        >
          <Box sx={{ height: "60vh", bgcolor: "white" }}>
            <Box sx={{ p: 10, textAlign: "center" }}>
              <Typography variant="h4">Login</Typography>
              <Box py={4}>
                <form onSubmit={loginFrm.handleSubmit}>
                  <Box py={1}>
                    <TextField
                      name="email"
                      label="Username"
                      onChange={loginFrm.handleChange}
                      onBlur={loginFrm.handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    {loginFrm.errors.email && (
                      <p
                        style={{
                          color: "red",
                          margin: "5px 20px 0 0",
                          paddingRight: 50,
                        }}
                        className="text text-danger"
                      >
                        (*) {loginFrm.errors.email}
                      </p>
                    )}
                  </Box>
                  <Box py={1}>
                    <TextField
                      name="password"
                      type="password"
                      label="Password"
                      onChange={loginFrm.handleChange}
                      onBlur={loginFrm.handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    {loginFrm.errors.password && (
                      <p
                        style={{
                          color: "red",
                          margin: "5px 0px 0 0",
                          paddingRight: 50,
                        }}
                        className="text text-danger"
                      >
                        (*) {loginFrm.errors.password}
                      </p>
                    )}
                  </Box>
                  <Box py={2} px={4}>
                    <Button type="submit" variant="contained" fullWidth>
                      Login
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
