import { useState, useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDo/List';
import CreateToDo from './components/ToDo/CreateToDo';
import EditToDo from './components/ToDo/EditToDo';

function App() {

  const [form, setForm] = useState('list');
  const [todos, setToDos] = useState([]);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('TO DO');

  const generateNewId = () => {
    const maxId = todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;
    return maxId + 1;
  };

  const onSaveToDo = (item) => {
    const newId = generateNewId();
    setToDos([
      ...todos,
      { ...item, id: newId }
    ]);
    setId(newId + 1);
  };

  // const onSaveToDo = (item) => {
  //   setToDos([
  //     ...todos,
  //     item
  //   ]);
  // }

  // const onDeleteItem = selectedId => {
  //   setId(selectedId);
  //   setForm('delete');
  // }


  // const onCreate = () => {
  //   setTitle('');
  //   setDueDate('');
  //   setStatus('TO DO');
  //   setForm('create');
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

  const onEditItem = (item) => {
    setId(item.id);
    setTitle(item.title);
    setDueDate(item.dueDate);
    setStatus(item.status);
    setForm('edit');
    console.log(item.id);
  }

  // const onUpdateToDo = () => {
  //   const updatedToDoItem = {
  //   id,
  //   title,
  //   dueDate,
  //   status
  //   };
  //   const updatedToDos = todos.map(todo => (todo.id === id ? updatedToDoItem : todo));
  //   setToDos(updatedToDos);
  //   setForm('list');
  // }

  const renderContent = () => {
    switch (form) {
      case 'create':
        return (
          <CreateToDo
            id = {id}
            setId = {setId}
            title = {title}
            setTitle = {setTitle}
            dueDate = {dueDate}
            setDueDate = {setDueDate}
            status = {status}
            setStatus = {setStatus}
            onSaveToDo = {onSaveToDo}
            onSetForm = {setForm}
          />
        );
      break;
      case 'edit':
        return (
          <EditToDo
            id = {id}
            setId = {setId}
            title = {title}
            setTitle = {setTitle}
            dueDate = {dueDate}
            setDueDate = {setDueDate}
            status = {status}
            setStatus = {setStatus}
            todos = {todos}
            setToDos = {setToDos}
            setForm = {setForm}
            // onUpdateToDo = {onUpdateToDo}
            onSetForm = {setForm}
          />
        );
      break;
      // case 'delete':
      //   return renderToDoDelete();
      //   break;
      default:
        return <ToDoList onEditItem={onEditItem} todos={todos} onSetForm={setForm}/>;
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