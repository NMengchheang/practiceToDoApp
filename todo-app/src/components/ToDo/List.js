const ToDoList = ({onSetId, todos, onSetForm}) => {

    const onToDosEdit = (selectedId) => {
        onSetForm('edit');
        onSetId(selectedId)
    }
    const onToDosDelete = (selectedId) => {
        onSetForm('delete');
        onSetId(selectedId)
    }

    const renderToDoItem = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.dueDate}</td>
                <td>{item.status}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                        <button onClick={ () => onToDosEdit(item.id) } type="button" className="btn btn-primary">Edit</button>
                        <button onClick={ () => onToDosDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                    </div>
                </td>
            </tr>
        )
    }

    const onToDosCreate = () => {
        onSetForm('create');
    }

    const renderToDos = () => {
        return todos.map(item => renderToDoItem(item))
    }

    return (
        <div>
          <h1 className="mt-5">ToDo List</h1>
            <table className="table tabled-border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>
                            <button onClick={ onToDosCreate } className="btn btn-primary">+ New</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { renderToDos() }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;