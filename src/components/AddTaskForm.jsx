const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/*Add task*/}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto btn-style">
          <button onClick={addTask} value="Add Task">
            Add Task
          </button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
export default AddTaskForm;
