
import axios, { AxiosResponse } from 'axios';
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';

const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    const response: AxiosResponse<UserRegistrationResponse> = await axios.post<UserRegistrationResponse>('/api/register', request);
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to register user');
  }
};

export default registerUser;