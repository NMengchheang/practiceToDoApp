import { useState, useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDo/List';
import CreateToDo from './components/ToDo/CreateToDo';
import EditToDo from './components/ToDo/EditToDo';
import DeleteToDo from './components/ToDo/DeleteToDo';

function App() {
  const [id, setId] = useState(1);
  const [form, setForm] = useState('list');
  const [todos, setToDos] = useState([]);
  const idRef = useRef(1);

  const incrementIdByOne = () => {
    idRef.current += 1;
  }

  const onSaveToDo = (item) => {
    setToDos([
      ...todos,
      item
    ]);
  }

  // const onDeleteItem = selectedId => {
  //   setId(selectedId);
  //   setForm('delete');
  // }

  // const onDeleteToDo = () => {
  //   setToDos(todos.filter(item => item.id != id));
  //   setForm('list');
  // }

  // const renderToDoDelete = () => {
  //   return (
  //     <div>
  //       <h1 className="mt-5">Delete ToDo Item</h1>
  //       <p>Are you sure?</p>
  //       <button onClick={() => setForm('list')} className="btn btn-default">No</button>
  //       <button onClick={onDeleteToDo} className="btn btn-danger">Yes</button>
  //     </div>
  //   )
  // }

  const getToDoItemById = (selectedId) => {
    const result = todos.filter(item => item.id == selectedId);
    return result.length ? result[0] : {};
  }

  // const onUpdateToDo = (editToDoItem) => {
  //   const updateToDos = todos.filter(item => item.id != id);
  //   setToDos([
  //   ...updateToDos,
  //   editToDoItem
  //   ]);
  //   setForm('list');
  // }

  const onUpdateToDo = (editToDoItem) => {
    const updateToDos = [];
    for (const item of todos){
      if (item.id == editToDoItem.id) {
        updateToDos.push(editToDoItem);
      } else {
        updateToDos.push(item);
      }
    }
    setToDos(updateToDos);
    setForm('list');
  }

  const renderContent = () => {
    switch (form) {
      case 'create':
        return (
          <CreateToDo lastestId={idRef.current} incrementIdByOne={incrementIdByOne} onSaveToDo={onSaveToDo} onSetForm={setForm} />
        );
      break;
      case 'edit':
        return (
          <EditToDo onUpdateToDo={onUpdateToDo} item={getToDoItemById(id)} onSetForm = {setForm}/>
        );
      break;
      case 'delete':
        return <DeleteToDo todos={todos} setToDos={setToDos} id={id} onSetForm = {setForm}/>;
        break;
      default:
        return <ToDoList onSetId={setId} todos={todos} onSetForm = {setForm}/>;
    }
  }

  return (
    <div className="container">
      <div className="col-md-6">
        <h1>Home</h1>
          { renderContent() }
      </div>
    </div>
  );
}

export default App;