import React from "react";
import { useStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store/configure-store";
import { addTask } from "../../redux/action/actions";
import useStateToProps from "../../redux/action/readData";

export const HomePage: React.FC = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleSubmit = (e: any) => {
    console.log(title, description);
    e.preventDefault();
    store.dispatch(addTask(title, description));
  };

  const tasks = useStateToProps((state: any) => {
    return state;
  });
  console.log("tasks", tasks);
  return (
    <div className={classes.body1}>
      <h1 className={classes.h1}>
        <div className={classes.title}>Task Management {">"} Home</div>
      </h1>
      <div className={classes.div1}>
        <p className={classes.p1}>Add a new Task</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className={classes.textarea}
            name="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            className={classes.textarea1}
            name="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button className={classes.addButton} type="submit">
            <FontAwesomeIcon
              fixedWidth
              color="white"
              icon={faPlus}
              cursor="pointer"
            />
            Add
          </button>
        </form>
      </div>
      <div className={classes.parent}>
        <h2 className={classes.h2}>Tasks</h2>
        <div className={classes.child}>
          {(tasks || []).map((task: any) => {
            return (
              <div key={task.id} className={classes.contain}>
                <div className={classes.taskContainer}>
                  <div className={classes.taskDetails}>
                    <span className={classes.p1}>{task.title}</span>
                    <div className={classes.taskDetailDescription}>
                      {task.description}
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
            );
          })}
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
    </div>
  );
};

export default HomePage;
