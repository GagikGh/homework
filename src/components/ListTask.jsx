import Button from "./Button"

function List({task,handleDelete,isChecked,setIsChecked}){
    return(
        <>
            <div className="task" style={{ 
            backgroundColor: isChecked ? 'lightgray' : 'white'}}>
                <div className="name">
                    <input type="checkbox" onClick={()=> {setIsChecked(!isChecked)}}/>
                    <p>{task}</p>
                </div>
                
                <div>
                    <Button content="X" handleDelete={handleDelete}/>
                    
                </div>
                
                
            </div>
        </>
    )
}


export default List