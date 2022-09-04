import React from "react";
import { useStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

// function homePage() {
export const HomePage: React.FC = ({}) => {
  const classes = useStyles();
  return (
    <body className={classes.body1}>
      <h1 className={classes.h1}>
        <div className={classes.title}>Task Management {">"} Home</div>
      </h1>
      <div className={classes.div1}>
        <p className={classes.p1}>Add a new Task</p>
        <textarea
          className={classes.textarea}
          name="Title"
          placeholder="Title"
        ></textarea>
        <textarea
          className={classes.textarea}
          name="Description"
          rows={10}
          placeholder="Description"
        ></textarea>
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
                    // onClick={}
                    cursor="pointer"
                  />
                </div>
              </div>
            </div>
            {/* <div className={classes.taskContainer}>
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
                    // onClick={}
                    cursor="pointer"
                  />
                </div>
              </div>
            </div>
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
                    // onClick={}
                    cursor="pointer"
                  />
                </div>
              </div>
            </div> */}
            <div className={classes.taskContainer}>
              <div className={classes.taskDetails}>
                <span className={classes.p1}>Task Title Goes here</span>
                <div className={classes.taskDetailDescription}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque est reprehenderit maxime explicabo sapiente . Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis mollitia similique corporis quasi iure
                  architecto, error perferendis vero, quia doloremque suscipit
                  ipsam enim unde eum voluptas amet consequatur odio at. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                  repudiandae ex reiciendis illum deserunt nostrum perferendis
                  provident unde excepturi libero delectus, debitis quis,
                  placeat eos quidem aliquid aliquam cupiditate laudantium!
                </div>
                <div className={classes.buttonContainer}>
                  <button className={classes.stateButton}>Todo</button>
                  <FontAwesomeIcon
                    fixedWidth
                    color="black"
                    size="2x"
                    icon={faEdit}
                    // onClick={}
                    cursor="pointer"
                  />
                </div>
              </div>
            </div>
          </div>

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
