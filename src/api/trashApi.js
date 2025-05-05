import axios from 'axios';

const BASE_URL = 'https://trash-map-eta.vercel.app/map?id=tancheon01';

export async function fetchTrashBins() {
  try {
    const response = await axios.get(`${BASE_URL}/api/trashbins`);
    return response.data;
  } catch (error) {
    console.error('🛑 쓰레기통 목록 불러오기 실패:', error);
    return [];
  }
}
