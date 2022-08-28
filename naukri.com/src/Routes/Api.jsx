

export const loadUserDataById = (id) => {
    return  fetch(`http://localhost:3000/data/${id}`)
        .then((res) =>  res.json())
        
};