import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { useNavigate } from "react-router-dom";
import storage from "../Utils/storage";
import { TOKEN } from "../Utils/constant";
type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  let token = storage.get(TOKEN);
  if (!token) {
    return (
      <Box
        sx={{
          backgroundImage: `url("https://img.freepik.com/free-vector/abstract-landscape-background-with-mountains-sunset_1048-14394.jpg?w=1380&t=st=1698227315~exp=1698227915~hmac=6a82cc70ee63cebd62e8fa6a75107a3ff429e4ebcb8d239c5dab9de610109d63")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Box
            className="header"
            sx={{ display: "flex", justifyContent: "space-between", p: 4 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AcUnitOutlinedIcon fontSize="large" />
              <Typography variant="h4">Zan</Typography>
            </Box>
            <Box>
              <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "65vh",
              width: "auto",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                mx: { xl: 60, xs: 0, sm: 0, md: 40 },
                my: { md: 20, xs: 10 },
              }}
            >
              <Typography variant="h2">WELCOME TO ZAN</Typography>
              <Box py={4}>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit officiis, dolor, accusamus delectus quis maiores
                  eaque laborum debitis quisquam quae soluta, optio cupiditate
                  quibusdam architecto? Non officia tenetur laboriosam voluptas!
                </Typography>
              </Box>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login to continute
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              padding: { xl: 2.6, md: 2.6, xs: 8 },
            }}
          >
            <Box>
              <Typography variant="h6">
                Design by <strong>Giang</strong>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  } else {
    window.location.href = "/product";
  }
};

export default Home;
