import { AxiosResponse } from 'axios';
import { User } from '../models/user.entity';
import http from '@/services/utils/http.service';

class UserService {
  public create(user: User) {
    return http
      .post('/User', user);
  }

  public getAll() {
    return http
      .get('/User')
      .then(({ data }: AxiosResponse) => data);
  }

  public delete(id: string) {
    return http
      .delete(`/User/${id}`)
      .then(({ data }: AxiosResponse) => data);
  }
}

export default new UserService();

