"use strict";
// TypeScript compiles your file as a module. Modules have their own scope — variables inside modules are not automatically global.
// Your HTML is trying to access handleSubmit or userList before the module initializes → error.
const userList = [];
function handleSubmit(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    const user = {
        id: Math.floor(Math.random() * 10000),
        name: nameInput,
        email: emailInput,
    };
    userList.push(user);
    console.log("userList", userList);
    displayUserList();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
function displayUserList() {
    let list = document.getElementById("userlist");
    list.innerHTML = "";
    userList.map((val) => {
        // console.log(val)
        const li = document.createElement("li");
        li.innerText = `id: ${val.id} name: ${val.name} email: ${val.email}`;
        list.appendChild(li);
    });
}
window.handleSubmit = handleSubmit;
//# sourceMappingURL=index.js.map