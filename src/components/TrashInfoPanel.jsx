import './TrashInfoPanel.css';
import { useState } from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

function TrashInfoPanel({ bin, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // 업로드 후 미리보기용
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`https://trashmap-backend.up.railway.app/api/bin/${bin.id}`);
        setImageUrl(res.data.imageUrl);
      } catch (err) {
        console.error("이미지 불러오기 실패:", err);
      }
    };
    fetchImage();
  }, [bin.id]);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("binName", bin.id);

    try {
      const res = await axios.post(
        "https://trashmap-backend-production.up.railway.app/api/upload",
        formData,
      );

      const filename = res.data; // UUID_파일이름.jpg
      const imageUrl = `https://trashmap-backend-production.up.railway.app/api/files/${filename}`;
      setUploadedImageUrl(imageUrl);
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
      <h2>{bin.name}</h2>
      {imageUrl ? (
        <img src = {imageUrl} alt = "쓰레기통 현재 상태" style = {{maxWidth: '100%'}} />
      ) : (
        <p> 이미지를 불러들이는 중 </p>
      )}
      
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
          <img src={uploadedImageUrl} alt="업로드된 사진" width="100%" />
        </div>
      )}
    </div>
  );
}

export default TrashInfoPanel;
