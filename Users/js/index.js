function loadUsers() {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(data => newUserDetails(data.results))
}

loadUsers()

function newUserDetails(users) {

    const UiDiv = document.getElementById("users")

    for (const user of users) {

        const div = document.createElement("div");
         div.classList.add("user")
        div.innerHTML = `
        
            <h3> Name : ${user?.name?.title} ${user?.name?.first} ${user?.name?.last}</h3>
            <p>Email : ${user?.email}</p>
            <p>phone : ${user?.phone}</p>
            <p>Gender : ${user?.gender}</p>
            <p>location : ${user?.location?.state}</p>
            <img src=" ${user?.picture?.large}" alt="">
            
       
       `

       UiDiv.appendChild(div)
       

    }
}

