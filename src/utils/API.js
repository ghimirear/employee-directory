import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

// 

var search = function () {
    return axios.get(BASEURL);
  }
  export default search;