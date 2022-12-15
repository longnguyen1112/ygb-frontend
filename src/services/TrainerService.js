import axios from 'axios';

const TRAINER_API_BASE_URL = "http://localhost:8080/admin/trainers";

class TrainerService{
    getTrainers(){
        return axios.get(TRAINER_API_BASE_URL);
    }

    createTrainer(trainer){
        return axios.post(TRAINER_API_BASE_URL,trainer);
    }

    getTrainerById(trainer_id)
    {
        return axios.get(TRAINER_API_BASE_URL + '/' + trainer_id);
    }

    updateTrainer(trainer, trainer_id)
    {
        return axios.put(TRAINER_API_BASE_URL + '/' + trainer_id,trainer);
    }

    deleteTrainer(trainer_id)
    {
        return axios.delete(TRAINER_API_BASE_URL + '/' + trainer_id);
    }
}

export default new TrainerService()
