import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Input,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React, { useState } from "react";
import { db } from "./firebase";
import EditIcon from "@material-ui/icons/Edit";
function Todo(props) {
  const todo = props.todo;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    // update the todo with the new input
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        style={{
          display: "flex",
          marginTop: "200px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            height: "200px",
            width: "500px",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <h3>Update the Task</h3>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(Event) => setInput(Event.target.value)}
          />
          <Button variant="contained" color="default" onClick={updateTodo}>
            Update ✔
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText primary={todo.todo} secondary="Dummy deadline" />

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(e) => setOpen(true)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(event) => db.collection("todos").doc(todo.id).delete()}
          >
            <ClearIcon />
          </IconButton>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
