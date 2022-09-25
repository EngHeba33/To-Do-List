const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto btn-style">
          <button onClick={updateTask} className="mr-20">
            Update Task
          </button>
          <button onClick={cancelUpdate}>Cancel</button>
        </div>
      </div>
      <br />
    </>
  );
};
export default UpdateForm;
