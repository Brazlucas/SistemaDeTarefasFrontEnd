import { AxiosResponse } from 'axios';
import Task from '../models/task.entity';
import http from '@/services/utils/http.service';

class TaskService {
    public async create(task: Task) {
        return http
            .post('/Task', Task);
    }
    public async update(task: Task) {
        return http
            .put(`/Task/${task.id}`, Task);
    }
    public async getAll() {
        return http
            .get('/Task')
            .then(({ data }: AxiosResponse) => data);
    }
    public async getById(id: string) {
        return http
            .get(`/Task/${id}`)
            .then(({ data }: AxiosResponse) => data);
    }
    public async delete(id: string) {
        return http
            .delete(`/Task/${id}`)
            .then(({ data }: AxiosResponse) => data);
    }
}
export default new TaskService();

