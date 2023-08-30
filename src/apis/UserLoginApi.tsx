
import axios, { AxiosResponse } from 'axios';
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    const response: AxiosResponse<UserLoginResponse> = await axios.post<UserLoginResponse>('/api/login', request);
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to login user');
  }
};

export default loginUser;