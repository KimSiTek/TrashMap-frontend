import axios from 'axios';

const BASE_URL = 'https://trashmap-backend-production.up.railway.app/api/trashbins';

export async function fetchTrashBins() {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error('🛑 쓰레기통 목록 불러오기 실패:', error);
    return [];
  }
}
