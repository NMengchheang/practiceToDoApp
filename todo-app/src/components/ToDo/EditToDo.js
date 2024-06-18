// const EditToDo = (props) => {
//     const item = props.item;
// }
import React, {useState} from "react";

const EditToDo = ({onUpdateToDo, item, onSetForm}) => {
    
    const [title, setTitle] = useState(item.title);
    const [dueDate, setDueDate] = useState(item.dueDate)
    const [status, setStatus] = useState(item.status);

    const onBackTolist = () => {
        onSetForm('list');
    }

    const onUpdate = () => {
        const editToDoItem = {
            id: item.id,
            title,
            dueDate,
            status
        }
        onUpdateToDo(editToDoItem);
    }

    return (
        <div>
            <h1 className="mt-5">Edit ToDo Item</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="newId" className="form-label">ID</label>
                    <input type="text" value={item.id} disabled className="form-control" id="newId" placeholder="Auto Generate"/>
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
                    <label htmlFor="newDueDate" className="form-label">Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                        <option value="In Progress">In Progress</option>
                        <option value="TO DO">To Do</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <div className="mb-3">
                    <button onClick={ onBackTolist } className="btn btn-default">Back to list</button>
                    <button onClick={ onUpdate } className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditToDo;