import axios from "axios";


export class UserNew{
    addArtist = (name,photo,favsport,points) => {
        return axios.post("http://localhost:3000/artist",{
            name,
            photo,
            favsport,
            points
        })
    }
}