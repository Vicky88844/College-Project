import axios from 'axios'

const instance =axios.create({
    baseURL:"https://www.themoviedb.org/",
});
export default instance;