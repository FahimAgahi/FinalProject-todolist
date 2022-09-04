import React from "react";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

// function EditPage() {
export const EditPage: React.FC = ({}) => {
  // const [isOpen, anchorEl, openMenu, closeMenu] = useMenu();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/homePage");
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <body className={classes.body}>
      <h1 className={classes.H1}>
        <div className={classes.textAlign}>Task Management {">"} Edit</div>
      </h1>
      <div className={classes.div}>
        <p className={classes.p1}>Edit Task</p>
        <textarea
          className={classes.textarea}
          name="Title"
          placeholder="Title"
        ></textarea>
        <textarea
          className={classes.textarea}
          name="Description"
          rows={40}
          placeholder="Description of Task goes here"
        ></textarea>

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className={classes.addContentMenu}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>inQA</MenuItem>
          <MenuItem>Done</MenuItem>
          <MenuItem>ToDO</MenuItem>
        </Menu>
        <div className={classes.buttonComponent}>
          <button className={classes.addButton}>
            <FontAwesomeIcon
              fixedWidth
              color="white"
              size="1x"
              icon={faEdit}
              // onClick={}
              cursor="pointer"
            />
            Edit
          </button>
          <form
            className={classes.cancelButton}
            onSubmit={() => handleSubmit()}
          >
            <button className={classes.cancelButton}>Cancel</button>
          </form>
        </div>
      </div>
      {/* <div className={classes.parent}>
      <h2 className={classes.h2}>Tasks</h2>
      <div className={classes.child}>
        <div className={classes.text}>
          <p className={classes.text2}>You having nothing to do.</p>
          <p className={classes.text2}>Go get some sleep.</p>
        </div>
      </div>
    </div>  */}
    </body>
  );
};

export default EditPage;
