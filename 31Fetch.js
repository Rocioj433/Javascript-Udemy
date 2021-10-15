const getUser = async() =>{
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await respuesta.json()
        console.log(users)

        for(let user of users){
            document.body.innerHTML+=`
            <ul>
                <li>
                    ${user.id}<br>
                    ${user.name}<br>
                    ${user.website}<br>
                    ${user.username}<br>
                </li>
            </ul>
            
            `
        }
    }catch(error){
        console.log(error)

    }finally{
        console.log('oleeee')
    }
}
getUser()