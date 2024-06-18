
const DeleteToDo = ({onSetForm, setToDos, todos, id}) => {
    const onBackTolist = () => {
        onSetForm('list');
    }

    const onDeleteToDo = () => {
        setToDos(todos.filter(item => item.id != id));
        onSetForm('list');
    }

    return (
        <div className="mb-3">
            <p>Are you sure want to delete!!</p>
            <button onClick={ onBackTolist } className="btn btn-default">Back to list</button>
            <button onClick={ onDeleteToDo } className="btn btn-primary">Delete</button>
        </div>
    )
}

export default DeleteToDo;