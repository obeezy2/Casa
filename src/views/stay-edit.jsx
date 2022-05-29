import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const theme = createTheme();

export const StayEdit = () => {
  const [summary, setSummary] = useState("");

  const handleChangeSum = (event) => {
    setSummary(event.target.value);
  };

  const [propertyType, setPropertyType] = useState("");

  const handleChangePropType = (event) => {
    setPropertyType(event.target.value);
  };

  const [roomType, setRoomType] = useState("");

  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };

  const [capacity, setCapacity] = useState(0);

  const handleChangeCapacity = (event) => {
    setCapacity(event.target.value);
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
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Allow event/parties"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Suits children"
                  />
                </FormGroup>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="select-prop-type-label">
                      Property type
                    </InputLabel>
                    <Select
                      labelId="select-prop-type-label"
                      id="select-prop-type"
                      value={propertyType}
                      label="property type"
                      onChange={handleChangePropType}
                    >
                      <MenuItem value={"Serviced apartment"}>
                        Serviced apartment
                      </MenuItem>
                      <MenuItem value={"Apartment"}>Apartment</MenuItem>
                      <MenuItem value={"Condominium"}>Condominium</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="select-room-type-label">
                      Room type
                    </InputLabel>
                    <Select
                      labelId="select-room-type-label"
                      id="select-room-type"
                      value={roomType}
                      label="room type"
                      onChange={handleChangeRoomType}
                    >
                      <MenuItem value={"Entire home/apt"}>
                        Entire home/apt
                      </MenuItem>
                      <MenuItem value={"Private room"}>Private room</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    autoComplete="given-capacity"
                    name="stay-capacity"
                    required
                    id="stay-capacity"
                    label="Capacity"
                    autoFocus
                    onChange={handleChangeCapacity}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Post your property !
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
