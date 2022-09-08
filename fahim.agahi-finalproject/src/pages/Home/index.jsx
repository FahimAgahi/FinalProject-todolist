import React from "react";
import { useStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store/configure-store";
import { addTask } from "../../redux/action/actions";
import useStateToProps from "../../redux/action/readData";
import TaskCard from "../../components/TaskCard";

export const HomePage = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    store.dispatch(addTask(title, description));
    setDescription("");
    setTitle("");
    let formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('status', 'ToDo');
    await fetch('http://localhost:80/CRUD/create', {
      method: 'POST', body: formData,
    })
    .then((res) => {
      console.log(res)
    })
    .catch(()=> {
      console.log('error');
    });
  };
  const tasks = useStateToProps((state) => {
    return state;
  });
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
          {(tasks || []).map((task) => {
            return (
              <TaskCard key={task.id} task={task} />
            );
          })}
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