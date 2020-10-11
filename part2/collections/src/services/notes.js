import axios from 'axios'

const baseUrl = 'https://secret-earth-35786.herokuapp.com/api/notes'


//get all notes from db.json
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//create
const create = newObj => {
    const request = axios.post(baseUrl, newObj)
    return request.then(response => response.data)
}

//update object
const update = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(response => response.data)
}


export default { getAll, create, update }

