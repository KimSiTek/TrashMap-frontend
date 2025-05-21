import './TrashInfoPanel.css';
import { useState } from 'react';
import axios from 'axios';

function TrashInfoPanel({ bin, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('binName', bin.id);

    try {
      const res = await axios.post(
        'https://trashmap-backend-production.up.railway.app/api/upload',
        formData
      );

      const filename = res.data; 
      const imageUrl = `https://trashmap-backend-production.up.railway.app/api/files/${filename}`;
      setUploadedImageUrl(imageUrl);
      alert('업로드 성공');
      setShowUpload(false);
    } catch (err) {
      alert('업로드 실패');
      console.error(err);
    }
  };

  return (
    <div className="trash-info-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <h3>쓰레기통 정보</h3>
      <p><strong>상태:</strong> {bin.status === 'full' ? '꽉 참' : '비어 있음'}</p>
      <p><strong>설명:</strong> {bin.description || '없음'}</p>
      <h2>{bin.name}</h2>
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

      {uploadedImageUrl && (
        <div className="image-preview">
          <img
            src={uploadedImageUrl}
            alt="업로드된 사진"
            width="100%"
          />
        </div>
      )}
      <br />
      <img
        src={`/images/${bin.id}.jpg`}
        alt="쓰레기통 초기 상태"
        style={{ 
          width : '200px',
          height: 'auto',
          borderRadius: '8px'
        }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}

export default TrashInfoPanel;
