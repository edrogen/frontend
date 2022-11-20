import * as React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  Chip,
  ListSubheader,
} from "@mui/joy";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ListItemContent from "@mui/joy/ListItemContent";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import SettingsIcon from "@mui/icons-material/Settings";

export function TeamNav() {
  return (
    <List size="sm" sx={{ "--List-item-radius": "8px", "--List-gap": "4px" }}>
      <ListItem nested>
        <ListSubheader>
          Browse
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ "--IconButton-size": "24px", ml: "auto" }}
          >
            <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            "& .JoyListItemButton-root": { p: "8px" },
          }}
        >
          <ListItem>
            <ListItemButton variant="soft" color="primary">
              <ListItemDecorator sx={{ color: "inherit" }}>
                <SettingsIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Applications</ListItemContent>
              <Chip
                variant="soft"
                color="info"
                size="sm"
                sx={{ borderRadius: "sm" }}
              >
                Beta
              </Chip>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: "neutral.500" }}>
                <AssignmentIndRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
