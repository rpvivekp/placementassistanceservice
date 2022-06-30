import axios from "axios";
import {RESUME_BASE_URL} from '../config/GlobalConstants';
import {JwtToken} from './JwtToken';

const USER_API_BASE_URL = "http://localhost:8082/placement/users/projects/";

class ProjectService{

    saveUserProject(userProject) {
        return axios.post(USER_API_BASE_URL+'project', userProject);
      }

    getUserProject(uId){
        return axios.get(`${RESUME_BASE_URL}/project/${uId}`,{
            headers:{
                jwtToken:JwtToken
            }
        });
    }
}

export default new ProjectService();