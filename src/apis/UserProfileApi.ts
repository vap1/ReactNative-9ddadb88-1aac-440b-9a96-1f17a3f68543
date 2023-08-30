
import axios, { AxiosResponse } from 'axios';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    const response: AxiosResponse<UserProfileResponse> = await axios.get('/api/profile', {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to retrieve user profile');
  }
};

export default getUserProfile;