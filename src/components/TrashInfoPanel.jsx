import './TrashInfoPanel.css';
import { useState } from 'react';
import axios from 'axios';

function TrashInfoPanel({ bin, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await axios.post("https://trashmap-backend-production.up.railway.app/api/trashbins", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("업로드 성공");
      setShowUpload(false);
    } catch (err) {
      alert("업로드 실패");
      console.error(err);
    }
  };

  return (
    <div className="trash-info-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <h3>쓰레기통 정보</h3>
      <p><strong>ID:</strong> {bin.id}</p>
      <p><strong>상태:</strong> {bin.status === 'full' ? '꽉 참' : '비어 있음'}</p>
      <p><strong>설명:</strong> {bin.description || '없음'}</p>

      <button onClick={() => setShowUpload(true)}>쓰레기통 상태 신고</button>

      {showUpload && (
        <div className="upload-section">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button onClick={handleUpload}>업로드</button>
        </div>
      )}

      {bin.imageUrl && (
        <div className="image-preview">
          <img src={bin.imageUrl} alt="쓰레기통 사진" />
        </div>
      )}
    </div>
  );
}

export default TrashInfoPanel;
