function Button({ handleDelete , content, addTask}) {


    return (
        <button className="btn" onClick={content === "Add Task" ? addTask : handleDelete} >{content}</button>
    )
}

export default Button;