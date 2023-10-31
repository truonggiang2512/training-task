import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allProduct } from "../data/ProductData";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import storage from "../Utils/storage";
import { TOKEN } from "../Utils/constant";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

type Props = {};
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const Detail = (props: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  let prodId = params.id;
  let prodIdParse: number;
  if (prodId) {
    prodIdParse = parseInt(prodId, 10);
  }
  const productWithId = allProduct.filter((item) => item.id == prodIdParse);
  useEffect(() => {}, [params.id]);
  console.log(params);
  return (
    <Container maxWidth="xl" disableGutters>
      <Box>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: "white",
          }}
        >
          <Box
            className="header"
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Box
              sx={{
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#000",
                }}
                onClick={() => {
                  navigate("/product");
                }}
              >
                <AcUnitOutlinedIcon fontSize="large" />
                <Typography variant="h4">Zan</Typography>
              </Box>
            </Box>

            <Box>
              <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  storage.clear(TOKEN);
                  window.location.href = "/login";
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </AppBar>
        <Toolbar />
        <Toolbar />

        <Box>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                onClick={() => {
                  navigate(`/product/${params.type}`);
                }}
                underline="hover"
                color="inherit"
              >
                {params.type}
              </Link>
              <Link
                underline="hover"
                color="inherit"
                onClick={() => {
                  navigate(`/product/${params.type}/${params.subtype}`);
                }}
              >
                {params.subtype}
              </Link>
            </Breadcrumbs>
          </div>
        </Box>
        <Box>
          {productWithId.map((item) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  gap: 5,
                }}
              >
                <Box>
                  <img src={`${item.image}`} alt="" />
                </Box>
                <Box p={3} pt={15}>
                  <Typography variant="h4">{item.name}</Typography>
                  <Box py={2}>
                    <Typography variant="h5"> Price: {item.price}$</Typography>
                  </Box>
                  <Typography>{item.des}</Typography>
                  <Box py={2}>
                    <Button variant="outlined">Add to cart</Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
