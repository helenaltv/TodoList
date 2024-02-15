import PropTypes from "prop-types";

function TodoList({ task, onDone, onDelete }) {
  return (
    <li>
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button className="grönKnapp" onClick={onDone}>
        Done
      </button>
      <button className="rosaKnapp" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

TodoList.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  onDone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default TodoList;
