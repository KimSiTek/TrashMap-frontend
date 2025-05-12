import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://trashmap-backend-production.up.railway.app/api/images")
      .then(res => {
        setImages(res.data); // 이제 전체 객체 저장
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>신고된 사진 목록</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {images.map((item, idx) => {
          const filename = item.imagePath.replace(/^\/?uploads\//, "");
          const imageUrl = `https://trashmap-backend-production.up.railway.app/api/files/${filename}`;
          const uploadedDate = new Date(item.uploadedAt).toLocaleString();

          return (
            <div key={idx} style={{ width: "220px" }}>
              <img
                src={imageUrl}
                alt={`신고사진-${idx}`}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "8px"
                }}
              />
              <p style={{ fontSize: "14px", margin: "6px 0 2px 0" }}>
                🗑️ <strong>{item.trashBinName}</strong>
              </p>
              <p style={{ fontSize: "13px", color: "#555" }}>
                ⏰ {uploadedDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
