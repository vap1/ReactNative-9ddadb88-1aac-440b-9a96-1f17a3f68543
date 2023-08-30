
import axios, { AxiosResponse } from 'axios';
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';

const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    const response: AxiosResponse<AdminUserDetailsResponse> = await axios.get<AdminUserDetailsResponse>('/api/admin/users', {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error('Failed to retrieve admin user details');
  }
};

export default getAdminUserDetails;