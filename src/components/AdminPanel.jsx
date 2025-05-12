import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/images")
      .then(res => {
        const fullPaths = res.data.map(path => "http://localhost:8080" + path);
        setImages(fullPaths);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>신고된 사진 목록</h2>
      {images.map((url, idx) => (
        <img key={idx} src={url} width="300px" alt={`신고사진-${idx}`} style={{ margin: "10px" }} />
      ))}
    </div>
  );
}
