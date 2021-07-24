import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo} secondary="Dummy deadline" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default Todo;
