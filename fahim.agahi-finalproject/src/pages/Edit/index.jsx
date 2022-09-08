import React, { useState } from "react";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStateToProps from "../../redux/action/readData";
import store from "../../redux/store/configure-store";
import { editTask } from "../../redux/action/actions";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useLocation } from 'react-router-dom'

// function EditPage() {
export const EditPage = ({}) => {
  const navigate = useNavigate();
  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(editTask(location.state.id, title, description, status));
    navigate("/homePage");
  };
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [status, setStatus] = useState(location.state.status);
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }
    if (e.target.name === 'description') {
      setDescription(e.target.value)
    }
    if (e.target.name === 'status') {
      setStatus(e.target.value)
      console.log('after change status')
      console.log(e.target.value)
    }
  }
  let handleState = () => {
    switch (location.state.status) {
      case 'ToDo':
        return (
          <>
            <option name='ToDo' value='ToDo'>
              ToDo
            </option>
            <option name='InProgress' value='InProgress'>
              InProgress
            </option>
          </>
        )
      case 'InProgress':
        return (
          <>
            <option value='InProgress'>InProgress</option>
            <option value='InQA'>InQA</option>
            <option value='Blocked'>Blocked</option>
          </>
        )
      case 'Blocked':
        return (
          <>
            <option value='Blocked'>Blocked</option>
            <option value='ToDo'>ToDo</option>
          </>
        )
      case 'InQA':
        return (
          <>
            <option value='InQA'>InQA</option>
            <option value='Done'>Done</option>
            <option value='ToDo'>ToDo</option>
          </>
        )
      case 'Done':
        return (
          <>
            <option value='Done'>Done</option>
            <option value='Deployed'>Deployed</option>
          </>
        )
      case 'Deployed':
        return (
          <>
            <option value='Deployed'>Deployed</option>
          </>
        )
      default:
        return <></>
    }
  }
  const classes = useStyles();
  return (
    <body className={classes.body}>
      <h1 className={classes.H1}>
        <div className={classes.textAlign}>Task Management {">"} Edit</div>
      </h1>
      <div className={classes.div}>
        <p className={classes.p1}>Edit Task</p>
        <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={classes.textarea}
          name="title"
          placeholder="Title"
          value={title}
          type='text'
          onChange={(e) => handleChange(e)}

        ></input>
        <input
          className={classes.textarea1}
          name="description"
          rows={40}
          value={description}
          onChange={(e) => handleChange(e)}
          type='text'
          placeholder="Description of Task goes here"
        ></input>
        <select name="status" id="" onChange={(e) => handleChange(e)} value={status}>
          {handleState()}
        </select>
        <div className={classes.buttonComponent}>
          <button className={classes.addButton}>
            <FontAwesomeIcon
              fixedWidth
              color="white"
              size="1x"
              icon={faEdit}
              cursor="pointer"
            />
            Edit
          </button>
          <div
            className={classes.cancelButton}
            // onSubmit={() => handleSubmit()}
          >
            <button className={classes.cancelButton} onClick={() => navigate('/HomePage')}>Cancel</button>
          </div>
        </div>
        </form>
      </div>
    </body>
  );
};

export default EditPage;