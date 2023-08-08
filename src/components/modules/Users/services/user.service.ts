import { AxiosResponse } from 'axios';
import { User } from '../models/user.entity';
import http from '@/services/utils/http.service';

class UserService {
  public async create(user: User) {
    return http
      .post('/User', user);
  }
  public async update(user: User) {
    return http
      .put(`/User/${user.id}`, user);
  }
  public async getAll() {
    return http
      .get('/User')
      .then(({ data }: AxiosResponse) => data);
  }
  public async getById(id: string) {
    return http
      .get(`/User/${id}`)
      .then(({ data }: AxiosResponse) => data);
  }
  public async delete(id: string) {
    return http
      .delete(`/User/${id}`)
      .then(({ data }: AxiosResponse) => data);
  }
}
export default new UserService();

