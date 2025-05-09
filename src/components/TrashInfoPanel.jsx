import './TrashInfoPanel.css';

function TrashInfoPanel({ bin, onClose }) {
  return (
    <div className="trash-info-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <h3>쓰레기통 정보</h3>
      <p><strong>ID:</strong> {bin.id}</p>
      <p><strong>상태:</strong> {bin.status === 'full' ? '꽉 참' : '비어 있음'}</p>
      <p><strong>설명:</strong> {bin.description || '없음'}</p>

      {bin.imageUrl && (
        <div className="image-preview">
          <img src={bin.imageUrl} alt="쓰레기통 사진" />
        </div>
      )}
    </div>
  );
}

export default TrashInfoPanel;
