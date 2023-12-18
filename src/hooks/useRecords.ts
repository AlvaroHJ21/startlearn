import { backendApi } from '@/api/backend.api';
import { ApiResponse } from '@/interfaces/ApiResponse';
import { Record } from '@/interfaces/Record';

export default function useRecords() {
  async function startLoadRecords() {
    const { data } = await backendApi.get<ApiResponse<Record[]>>('/records');
    return data.data;
  }

  async function startCreateRecord(dataToSave: { name: string; score: number }) {
    await backendApi.post<ApiResponse<Record>>('/records', dataToSave);
  }

  return { startLoadRecords, startCreateRecord };
}
