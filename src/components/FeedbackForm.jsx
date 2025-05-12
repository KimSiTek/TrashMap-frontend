// src/components/FeedbackForm.jsx
import { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return alert('피드백을 입력해주세요.');

    try {
      await axios.post('https://trashmap-backend-production.up.railway.app/api/feedback', {
        message,
      });
      setSubmitted(true);
      setMessage(''); // 제출 후 초기화
    } catch (err) {
      alert('제출에 실패했습니다.');
      console.error(err);
    }
  };

  return (
    <div style={{ marginTop: '3rem', padding: '1rem', borderTop: '1px solid #ccc' }}>
      <h3>📝 피드백 작성</h3>
      <textarea
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="불편한 점이나 개선 의견을 자유롭게 남겨주세요."
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>제출</button>
      {submitted && <p style={{ color: 'green', marginTop: '1rem' }}>✅ 감사합니다! 피드백이 제출되었습니다.</p>}
    </div>
  );
}

export default FeedbackForm;
