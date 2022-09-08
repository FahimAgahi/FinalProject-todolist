import React from "react";
import { useStyles } from "./styless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../redux/action/actions";
import store from "../../redux/store/configure-store";

export const TaskCard = ({task}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    store.dispatch(deleteTask(id));
    navigate("/homePage");
  };
  return (
    <div className={classes.contain}>
        <div className={classes.taskContainer}>
            <div className={classes.taskDetails}>
            <span className={classes.p1}>{task.title}</span>
            <div className={classes.taskDetailDescription}>
                {task.description}
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.stateButton}>{task.status}</button>
                <FontAwesomeIcon
                fixedWidth
                color="black"
                size="2x"
                icon={faEdit}
                onClick={() => navigate('/editPage', {
                    state: {
                      id: task.id,
                      title: task.title,
                      description: task.description,
                      status: task.status,
                    },
                  })}
                cursor="pointer"
                />
                <FontAwesomeIcon
                color="black"
                size="2x"
                icon={faTrash}
                onClick={() => handleDelete(task.id)}
                />
            </div>
            </div>
        </div>
    </div>
  );
};

export default TaskCard;
