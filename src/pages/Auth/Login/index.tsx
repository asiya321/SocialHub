import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import TextField from "components/Atoms/TextField/TextField";
import { ILogin } from "interfaces/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import palette from "theme/palette";
import useForm from "./hooks/useForm";
import { useAPIActions } from "./query/useApiActions";

function Login() {
  const { tryLogin } = useAPIActions();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: ILogin) => {
    await tryLogin(values);
  };
  const formik = useForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const handlePasswordToggle = () => setShowPassword((show) => !show);

  return (
    <Container
      sx={{
        pt: 7,
      }}
    >
      <Box
        sx={{
          maxWidth: 450,
          margin: "auto",
        }}
      >
        <Typography
          component="h1"
          sx={{
            paddingBottom: "3rem",
            textAlign: "center",
            color: "#FC969B",
          }}
          variant="h1"
        >
          Boilerplate demo
        </Typography>

        <Box sx={{ color: palette.text.secondary }}>
          <TextField
            error={!!touched.email && !!errors.email}
            helperText={(touched.email && errors && errors.email) || ""}
            label="Email Address"
            placeholder="Email"
            value={values.email}
            onBlur={handleBlur("email")}
            onChange={handleChange("email")}
          />
          <TextField
            iconEnd
            error={!!touched.password && !!errors.password}
            helperText={(touched.password && errors && errors.password) || ""}
            icon={
              <IconButton onClick={handlePasswordToggle}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            label="Password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onBlur={handleBlur("password")}
            onChange={handleChange("password")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& a": {
              textDecoration: "none",
              color: palette.info.light,
              "&:hover": {
                color: palette.info.dark,
              },
            },
          }}
        >
          <Typography component="p" sx={{ color: palette.text.secondary }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
          </Typography>
          <Link to="/">
            <Typography>Forgot Password</Typography>
          </Link>
        </Box>
        <Box sx={{ mt: 2, width: "100%" }}>
          <Button
            disabled={!(isValid && dirty)}
            sx={{ width: "inherit", backgroundColor: palette.info.main }}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? (
              <CircularProgress color="warning" size={12} />
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
