import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';


function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = {id : num, title : newTask, status : false}
      setToDo([...toDo,newEntry])
      setNewTask('');

    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if(task.id === id){
        return({...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title : e.target.value,
      status : updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container">
      <br/><br/>
      <div className="container1">
      <br/><br/> 
      {updateData && updateData ? (
        <UpdateForm
        updateData = {updateData}
        changeTask = {changeTask} 
        updateTask = {updateTask}
        cancelUpdate = {cancelUpdate}/>
      ):(
        <AddTaskForm 
        newTask = {newTask}
        setNewTask = {setNewTask}
        addTask = {addTask}/>
      )}
     
      {toDo && toDo.length ?'':<h3>No Tasks......</h3>}
      <ToDo
      toDo = {toDo}
      markDone = {markDone}
      setUpdateData = {setUpdateData}
      deleteTask = {deleteTask}
      />
    </div>
    </div>
  );
}

export default App;
