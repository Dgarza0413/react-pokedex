import axios from 'axios';


export const signIn = async () => {
    fetch('/addUser')
        .then(res => console.log(res))
        .catch(err => console.error(err))
}