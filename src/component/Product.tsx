import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
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
import { debounce } from "lodash";
type Props = {};
const drawerWidth = 240;
const Product = (props: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  let [dataPro, setDataPro] = useState<Product[]>([]);
  const [brand, setBrand] = React.useState("");
  const rootBrands = categories.filter(
    (category) => category.parentId === null
  );

  // loc ra cac brand duy nhat
  const renderCate = () => {
    return rootBrands.map((item) => {
      const subcategories = categories.filter(
        (category) => category.parentId === item.id
      );
      // loc ra cac subcate thuoc cac brand duy nhat
      return (
        <TreeItem
          key={item.id}
          nodeId={`${item.id}`}
          onClick={() => {
            const productsInCategory = allProduct.filter((product) => {
              return product.brand === item.name;
            });
            setDataPro(productsInCategory);
            navigate(`/product/${item.name}`);
          }}
          label={`${item.name}`}
        >
          {subcategories.map((subcategory) => (
            <TreeItem
              key={subcategory.id}
              label={`${subcategory.name}`}
              nodeId={`${subcategory.id}`}
              onClick={() => {
                const productsInCategory = allProduct.filter((product) => {
                  return product.brand === item.name;
                });
                const productSubsCate = productsInCategory.filter((product) => {
                  return product.categoryId === subcategory.id;
                });
                setDataPro(productSubsCate);
                navigate(`/product/${item.name}/${subcategory.name}`);
              }}
            />
          ))}
        </TreeItem>
      );
    });
  };
  //debounce input

  const debouncedSearch = debounce(async (value) => {
    const searchResult = allProduct.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase().trim());
    });
    setDataPro(searchResult);
  }, 300);
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }
  const handleSelect = (e: SelectChangeEvent) => {
    const searchResult = allProduct.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trim());
    });
    setDataPro(searchResult);
    setBrand(e.target.value);
  };
  console.log("RENDERRRRRRRRRRRRRRRRR");
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
            <Box sx={{ display: "flex", gap: 3, justifyContent: "left" }}>
              <Box>
                <TextField
                  id="filled-search"
                  label="Search for Product"
                  type="search"
                  variant="filled"
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ width: "10%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brand}
                    label="Brand"
                    onChange={handleSelect}
                  >
                    <MenuItem value={"Adidas"}>Adidas</MenuItem>
                    <MenuItem value={"Nike"}>Nike</MenuItem>
                    <MenuItem value={"Van"}>Van</MenuItem>
                    <MenuItem value={"Converse"}>Converse</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Toolbar />

            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 2, md: 8, xl: 12 }}
            >
              {dataPro.map((item, key) => {
                return (
                  <Grid item xs={2} sm={4} md={4} key={key}>
                    <Box
                      onClick={() => {
                        // navigate()
                      }}
                    >
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
