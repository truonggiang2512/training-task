import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { useNavigate, useParams } from "react-router-dom";
import storage from "../Utils/storage";
import { TOKEN } from "../Utils/constant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import {
  TreeItem,
  TreeItemProps,
  useTreeItem,
  TreeItemContentProps,
} from "@mui/x-tree-view/TreeItem";

import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { allProduct, categories } from "../data/ProductData";
import { Product } from "../Utils/model";
type Props = {};
const drawerWidth = 240;
const Product = (props: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  let [dataPro, setDataPro] = useState<Product[]>([]);
  const filterBrand = (id: number): Product[] => {
    const newArr: Product[] = allProduct.filter(
      (item) => item.categoryId === id
    );
    return newArr;
  };
  const renderCate = () => {
    return categories.map((item) => {
      return (
        <TreeItem
          key={item.id}
          nodeId={`${item.id}`}
          onClick={() => {
            const productsInCategory = allProduct.filter(
              (product) => product.categoryId === item.id
            );

            setDataPro(productsInCategory);
            navigate(`/product/${item.name}`);
          }}
          label={`${item.name}`}
        >
          {item.subcategories?.map((itemsub) => {
            return (
              <TreeItem
                key={itemsub.id}
                nodeId={`${itemsub.id}`}
                label={`${itemsub.name}`}
                onClick={() => {
                  const subcategoriesProduct = allProduct.filter((product) => {
                    return (
                      product.subcategoryId === itemsub.id &&
                      product.categoryId === itemsub.parentId
                    );
                  });
                  setDataPro(subcategoriesProduct);
                  navigate(`/product/${item.name}/${itemsub.name}`);
                }}
              />
            );
          })}
        </TreeItem>
      );
    });
  };
  useEffect(() => {
    return setDataPro(allProduct);
  }, []);
  useEffect(() => {}, [params.type]);
  useEffect(() => {}, [dataPro]);
  let token = storage.get(TOKEN);
  if (token) {
    return (
      <Container maxWidth={false} disableGutters>
        <Box sx={{ display: "flex" }}>
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
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#000",
                }}
              >
                <AcUnitOutlinedIcon fontSize="large" />
                <Typography variant="h4">Zan</Typography>
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
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                <ListItem>
                  <Box py={1}>
                    <Typography variant="h5">Category</Typography>
                  </Box>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem nodeId="100" label="Shoes">
                      <TreeItem
                        nodeId="0"
                        onClick={() => {
                          setDataPro(allProduct);
                          navigate(`/product`);
                        }}
                        label="All Shoes"
                      />
                      {renderCate()}
                    </TreeItem>
                  </TreeView>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />
            <Toolbar />

            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 2, md: 8, xl: 12 }}
            >
              {dataPro.map((item, key) => {
                return (
                  <Grid item xs={2} sm={4} md={4} key={key}>
                    <Box>
                      <Box sx={{ textAlign: "center", margin: "auto" }}>
                        <img
                          height="100%"
                          width="80%"
                          src={`${item.image}`}
                          alt=""
                        />
                      </Box>
                      <Box sx={{ textAlign: "left" }}>
                        <Typography sx={{ color: "brown" }}>Just in</Typography>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.price}$</Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  } else {
    alert("You must login first");
    window.location.href = "/login";
  }
};

export default Product;
