import Task from "./Task"

const List = ( { list, onDelete, onToggle  }) => {
    
    
    return (
        <section className="task-container">
            {list.map((e) => (
            <Task 
                task={e} key={e.id}
                onDelete={onDelete}
                onToggle={onToggle}
            />))}
        </section>
    )
}

export default List
