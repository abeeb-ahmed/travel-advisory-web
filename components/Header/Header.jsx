import React from "react";
import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Header.css";

const Header = () => {
  const isLaptop = useMediaQuery("(min-width:768px)");

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between " }}>
        <Typography variant="h5" className="title">
          Travel Advisor
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ mr: 1 }}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className="search">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <InputBase placeholder="Search..." className="header-input" />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
