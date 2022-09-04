import React from "react";
import { useStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// function homePage() {
export const HomePage: React.FC = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <body className={classes.body1}>
      <h1 className={classes.h1}>
        <div className={classes.title}>Task Management {">"} Home</div>
      </h1>
      <div className={classes.div1}>
        <p className={classes.p1}>Add a new Task</p>
        <form onSubmit={}>
          <input
            type="text"
            className={classes.textarea}
            name="Title"
            placeholder="Title"
          ></input>
          <input
            type="text"
            className={classes.textarea1}
            name="Description"
            placeholder="Description"
          ></input>
          <button className={classes.addButton}>
            <FontAwesomeIcon
              fixedWidth
              color="white"
              icon={faPlus}
              // onClick={onClose}
              cursor="pointer"
            />
            Add
          </button>
        </form>
      </div>
      <div className={classes.parent}>
        <h2 className={classes.h2}>Tasks</h2>
        <div className={classes.child}>
          <div className={classes.contain}>
            <div className={classes.taskContainer}>
              <div className={classes.taskDetails}>
                <span className={classes.p1}>Task Title Goes here</span>
                <div className={classes.taskDetailDescription}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque est reprehenderit maxime explicabo sapiente .
                </div>
                <div className={classes.buttonContainer}>
                  <button className={classes.stateButton}>Todo</button>
                  <FontAwesomeIcon
                    fixedWidth
                    color="black"
                    size="2x"
                    icon={faEdit}
                    onClick={() => navigate("/editPage")}
                    cursor="pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* onClick={() =>
                navigate('/editPage', {
                  state: {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    status: item.status,
                  },
                })
              } */}
          {/* <div className={classes.text}>
            <p className={classes.text2}>You having nothing to do.</p>
            <p className={classes.text2}>Go get some sleep.</p>
          </div> */}
        </div>
      </div>
    </body>
  );
};

export default HomePage;
