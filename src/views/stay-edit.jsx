import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";

const theme = createTheme();

const _StayEdit = () => {
  const [summary, setSummary] = React.useState("");
  const handleChangeSum = (event) => {
    setSummary(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fName = data.get("firstName");
    const lName = data.get("lastName");
    const user = {
      username: data.get("username"),
      fullname: fName + " " + lName,
      password: data.get("password"),
    };
    console.log(user);
  };
  return (
    <section className="edit-stay-container">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Typography component="h1" variant="h5">
                        Sign up
                    </Typography> */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-title"
                    name="stay-title"
                    required
                    fullWidth
                    id="stay-title"
                    label="Title"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-flexible"
                    fullWidth
                    multiline
                    maxRows={4}
                    label="Describe your property"
                    value={summary}
                    onChange={handleChangeSum}
                  />
                </Grid>
                <FormGroup>
                    {/* No smoking; No Pets; This resort's rules apply. Please call the resort directly to verify details. */}
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Allow smoking"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Allow pets"
                  />
                </FormGroup>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </section>
  );
};

function mapStateToProps(storeState) {
  return {};
}
const mapDispatchToProps = {};

export const StayEdit = connect(mapStateToProps, mapDispatchToProps)(_StayEdit);
