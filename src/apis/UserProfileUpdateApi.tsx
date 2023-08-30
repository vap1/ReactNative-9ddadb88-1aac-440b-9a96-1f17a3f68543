
import axios, { AxiosResponse } from 'axios';
import { UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

const updateUserProfile = async (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> => {
  try {
    const response: AxiosResponse<UserProfileUpdateResponse> = await axios.put('/api/profile', request, {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to update user profile');
  }
};

export default updateUserProfile;