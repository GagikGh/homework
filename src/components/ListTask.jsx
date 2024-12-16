// import Button from "./Button";

// function Section({ contents }) {
//     return (
//         <section>
//           <h2>{contents.title}</h2>
//           {contents.buttonsTitle.map((title) => (
//             <Button key={title} title={title} />
//           ))}
//         </section>
//     )
// }

// export default Section;

// function Li({content}){
//   return(
    
//       <li>{content}</li>
    
//   )
// }

// export default Li

import Button from "./Button"

function List({task}){
    return(
        <>
            <div className="task">
                <p>{task}</p>
                <div>
                    <Button content="Edit"/>
                    <Button content="Delete"/>
                </div>
                
                
            </div>
        </>
    )
}


export default List