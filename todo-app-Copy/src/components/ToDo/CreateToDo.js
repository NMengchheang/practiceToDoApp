import React from 'react';

const CreateToDo = ({id, setId, title, setTitle, dueDate, setDueDate, status, setStatus, onSaveToDo, onSetForm}) => {
    
    // const idRef = useRef(1);

    const onSave = () => {
        const newToDoItem = {
            id,
            title,
            dueDate,
            status
        };
        onSaveToDo(newToDoItem);
        setTitle('');
        setDueDate('');
        onSetForm('list');
    }

    const onBackTolist = () => {
        setTitle('');
        setDueDate('');
        setStatus('TO DO');
        onSetForm('list')
    }
    
    return (
        <div>
            <h1 className="mt-5">New ToDo Item</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="newId" className="form-label">ID</label>
                    <input type="text" disabled className="form-control" id="newId" placeholder="Auto Generate"/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="newTitle" className="form-label">Title *</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="newDueDate" className="form-label">Due Date *</label>
                    <input type="datetime-local" onChange={(e) => setDueDate(e.target.value)} className="form-control" value={dueDate}/>
                </div>
                <div className="mb-3">
                    <button onClick={ onBackTolist } className="btn btn-default">Back to list</button>
                    <button onClick={ onSave } className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateToDo;