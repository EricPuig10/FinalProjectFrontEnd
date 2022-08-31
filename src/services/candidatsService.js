import axios from "axios"

const baseURL= "http://localhost:8080";

export const candidatsService={
    getAllCandidats() {
        const candidats = axios.get(baseURL + "/candidats").then((res)=>res.data);
        return candidats;
    }
}