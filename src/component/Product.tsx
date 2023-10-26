import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { useNavigate } from "react-router-dom";
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
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import defaultValue from "../data/ProductData";
type Props = {};
const drawerWidth = 240;
const Product = (props: Props) => {
  let [dataPro, setDataPro] = useState(defaultValue);
  let navigate = useNavigate();
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
                    <TreeItem
                      nodeId="10"
                      onClick={() => {
                        setDataPro(defaultValue);
                      }}
                      label="All Shoes"
                    />
                    <TreeItem nodeId="1" label="Men">
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.type === "Adidas"
                            )
                          );
                        }}
                        nodeId="1.1"
                        label="Adidas"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter((item) => item.type === "Nike")
                          );
                        }}
                        nodeId="1.2"
                        label="Nike"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter((item) => item.type === "Van")
                          );
                        }}
                        nodeId="1.3"
                        label="Van"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.type === "Converse"
                            )
                          );
                        }}
                        nodeId="1.4"
                        label="Converse"
                      />
                    </TreeItem>
                    <TreeItem nodeId="2" label="Women">
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.type === "Adidas"
                            )
                          );
                        }}
                        nodeId="2.1"
                        label="Adidas"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter((item) => item.type === "Nike")
                          );
                        }}
                        nodeId="2.2"
                        label="Nike"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter((item) => item.type === "Van")
                          );
                        }}
                        nodeId="2.3"
                        label="Van"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.type === "Converse"
                            )
                          );
                        }}
                        nodeId="2.4"
                        label="Converse"
                      />
                    </TreeItem>
                    <TreeItem nodeId="3" label="Price">
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.price > 200 && item.price < 300
                            )
                          );
                        }}
                        nodeId="3.1"
                        label="200-300 $"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.price > 300 && item.price < 400
                            )
                          );
                        }}
                        nodeId="3.2"
                        label="300-400 $"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter(
                              (item) => item.price > 400 && item.price < 500
                            )
                          );
                        }}
                        nodeId="3.3"
                        label="400-500 $"
                      />
                      <TreeItem
                        onClick={() => {
                          setDataPro(
                            defaultValue.filter((item) => item.price > 500)
                          );
                        }}
                        nodeId="2.4"
                        label="> 500 $"
                      />
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
