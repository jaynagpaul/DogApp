import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Create";
import FavoriteIcon from "@material-ui/icons/Assessment";
import LocationOnIcon from "@material-ui/icons/Add";

export default function NavBar(props) {
  const [value, setValue] = props.vals;
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%"
      }}
    >
      <BottomNavigationAction label="Log" icon={<RestoreIcon />} />
      <BottomNavigationAction label="View" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Add New Dog" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
