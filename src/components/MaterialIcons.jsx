import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className=""
      id="bottomnav"
    >
      <Button
        href="https://www.instagram.com/nezihcanturgut/?igshid=1kdzwedvmhrfg"
        type="button"
      >
        <BottomNavigationAction
          src=""
          label="Instagram"
          className="icons"
          icon={<InstagramIcon />}
        />
      </Button>
      <Button href="https://www.linkedin.com/in/nezihct/" type="button">
        <BottomNavigationAction
          className="icons"
          src=""
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
      </Button>
      <Button href="https://twitter.com/nezihct" type="button">
        <BottomNavigationAction
          src=""
          label="Twitter"
          className="icons"
          icon={<TwitterIcon />}
        />
      </Button>
    </BottomNavigation>
  );
}
