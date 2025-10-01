import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('video');
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/download', { videoUrl: url, format });
      setDownloadLink(res.data.file);
    } catch (err) {
      setError('Download failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Video/Audio Downloader</h1>
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Paste video URL" />
      <select value={format} onChange={e => setFormat(e.target.value)}>
        <option value="video">Video</option>
        <option value="audio">Audio (MP3)</option>
      </select>
      <button onClick={handleDownload}>Download</button>
      {loading && <p>Processing...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {downloadLink && <a href={`http://localhost:5000${downloadLink}`} download>Click here to download</a>}
    </div>
  );
}

export default App;
