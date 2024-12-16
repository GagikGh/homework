// import Section from "./components/section";

// function Page() {
//   const contents = [
//     {
//         title: "Main Section",
//         buttonsTitle: ["Schedule", "Summary", "Recent List"]
//     },
//     {
//         title: "Component",
//         buttonsTitle: ["Child Component", "Child Component", "Child Component"]
//     },
//     {
//         title: "<main-Section>",
//         buttonsTitle: ["<Schedule>", "<Summary>", "<recent list>"]
//     }
//   ];
//   return (
//     <>
//       <h1>From Design To Implementation</h1>
//       <div id="main">
    
//       {contents.map((item) => (
//         <Section key={item.title} contents={item} /> 
//       ))}
//       </div>     
//     </>
//   );
// }

// export default Page;
// import Li from "./components/Section";



// function Ul(){
//   const strings = ["string1","string2","string3"];
  

//   return(
//     <ul>
//     {strings.map(string => (<Li key={strings} content = {string}/>))}
//     </ul>
      
    
//   )
// }



// export default Ul


import Button from "./components/Button";
import List from "./components/ListTask"



function Todo(){
  const tasks = [
      ["Task-1","Task-2","Task-3"],

  ];
   
  return(
    <div className="container">
      <h1>TO DO List</h1>
      <div className="enterTask">
          <input type="text" placeholder="Enter a task"></input>
          <Button content="Add Task"/>
      </div>
      
      {tasks.map(task => (<List  task={task} />))}

    </div>
  )
}

export default Todo