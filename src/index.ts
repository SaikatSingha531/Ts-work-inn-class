interface UserInterface {
  id: number;
  name: string;
  email: string;
}

// TypeScript compiles your file as a module. Modules have their own scope — variables inside modules are not automatically global.

// Your HTML is trying to access handleSubmit or userList before the module initializes → error.

const userList: UserInterface[] = [];

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  let nameInput = (document.getElementById("name") as HTMLInputElement).value;
  let emailInput = (document.getElementById("email") as HTMLInputElement).value;
  
  
  
  
  const user: UserInterface = {
    id: Math.floor(Math.random() * 10000),
    name: nameInput,
    email: emailInput,
  };
  
  userList.push(user);
  console.log("userList", userList);
  displayUserList();
  (document.getElementById("name") as HTMLInputElement).value ="";
 (document.getElementById("email") as HTMLInputElement).value = "";
  
}

function displayUserList (){
  let list = (document.getElementById("userlist") as HTMLUListElement) 

  list.innerHTML = ""

  userList.map((val)=>{
    // console.log(val)
    const li = document.createElement ("li")
    li.innerText = `id: ${val.id} name: ${val.name} email: ${val.email}`
    list.appendChild(li)
  })

}




(window as any).handleSubmit = handleSubmit;
