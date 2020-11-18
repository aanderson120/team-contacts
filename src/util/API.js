import axios from "axios";

export default function getEmoloyeeMName () {
    const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
    return axios.get(BASEURL);

}
