const root = document.getElementById("root");
 function App(){

    let todos = [
        {label:"Learn JS",completed : false},
        {label:"Learn Node",completed:false},
        {label:"Learn CSS",completed :false}
    ];
    const container = document.createElement("div");

    container.innerHTML = todos.length;
    
   return container;
 }

 root.appendChild(App());