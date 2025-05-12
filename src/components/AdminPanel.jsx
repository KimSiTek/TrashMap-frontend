import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://trashmap-backend-production.up.railway.app/api/images")
      .then(res => {
        const fullPaths = res.data.map(filename => {
          const clean = filename.replace("/uploads/", "").replace("uploads/", "");
          return `https://trashmap-backend-production.up.railway.app/api/files/${clean}`;
        });
        setImages(fullPaths);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>신고된 사진 목록</h2>
      {images.map((url, idx) => (
        <img
          key={idx}
          src={url}
          width="300px"
          alt={`신고사진-${idx}`}
          style={{ margin: "10px", border: "1px solid #ccc" }}
        />
      ))}
    </div>
  );
}
