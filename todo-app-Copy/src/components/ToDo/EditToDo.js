// const EditToDo = (props) => {
//     const item = props.item;
// }

const EditToDo = ({todos, id, setId, title, setTitle, dueDate, setDueDate, status, setStatus, onSetForm, setToDos, setForm}) => {

    const onBackTolist = () => {
        setTitle('');
        setDueDate('');
        setStatus('TO DO');
        onSetForm('list');
    }

    const onUpdateToDo = () => {
        const updatedToDoItem = {
            id,
            title,
            dueDate,
            status
        };
        const updatedToDos = todos.map(todo => (todo.id === id ? updatedToDoItem : todo));
        setToDos(updatedToDos);
        setTitle('');
        setDueDate('');
        setStatus('TO DO');
        onSetForm('list');
    }

    // (e) => setTitle(e.target.value)

    return (
        <div>
            <h1 className="mt-5">Edit ToDo Item</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="newId" className="form-label">ID</label>
                    <input type="text" disabled className="form-control" id="newId" placeholder="Auto Generate"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="newTitle" className="form-label">Title *</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="newDueDate" className="form-label">Due Date *</label>
                    <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="editStatus" className="form-label">Status *</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                        <option value="IN PROGRESS">IN PROGRESS</option>
                        <option value="TO DO">TO DO</option>
                        <option value="CLOSED">CLOSED</option>
                    </select>
                </div>
                <div className="mb-3">
                    <button onClick={ onBackTolist } className="btn btn-default">Back to list</button>
                    <button onClick={ onUpdateToDo } className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditToDo;