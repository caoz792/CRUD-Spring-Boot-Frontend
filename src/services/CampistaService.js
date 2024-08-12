import axios from "axios";

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8090/api/v1/campistas';

class CampistaService{

    getAllCampistas(){
        return axios.get(CLIENTE_BASE_REST_API_URL);
    }

    createCampista(campista){
        return axios.post(CLIENTE_BASE_REST_API_URL,campista);
    }

    getCampistaById(campistaId){
        return axios.get(CLIENTE_BASE_REST_API_URL + '/' + campistaId);
    }

    updateCampista(campistaId, campista){
        return axios.put(CLIENTE_BASE_REST_API_URL + '/' + campistaId, campista);
    }

    deleteCampista(campistaId){
        return axios.delete(CLIENTE_BASE_REST_API_URL + '/' + campistaId);
    }

}

export default new CampistaService();