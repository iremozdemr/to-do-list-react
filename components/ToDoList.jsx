export default function ToDoList() {

    let todos = [
        "go to the gym",
        "pick up the kids from school"
    ]

    return (
        <ul>
            {todos.map((todo,todoIndex) => {
                return(
                    <li className="todoItem" key={todoIndex}>{todo}</li>
                )
            })}
        </ul>
    )
}