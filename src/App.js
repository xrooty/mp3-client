import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [format, setFormat] = useState('audio');
  const [downloadLink, setDownloadLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/download', { videoUrl, format });
      const fileUrl = `http://localhost:5000${res.data.file}`;
      setDownloadLink(fileUrl);
    } catch (err) {
      console.error(err);
      setError('❌ Download failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="app">
        <h1>YouTube Downloader</h1>
        <p>Paste your YouTube URL and choose format</p>

        <input
          type="text"
          placeholder="https://youtube.com/..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="audio">🎧 Audio (.mp3)</option>
        </select>

        <button onClick={handleDownload} disabled={loading}>
          {loading ? 'Processing...' : 'Download Now'}
        </button>

        {error && <p className="error">{error}</p>}

        {downloadLink && (
          <div className="download-box">
            ✅ Your file is ready:
            <br />
            <a href={downloadLink} download>👉 Click here to download</a>
          </div>
        )}
      </div>

      {/* 🌊 Optional wave overlay */}
      <svg className="wave" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,96C480,96,600,160,720,160C840,160,960,96,1080,106.7C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
    </div>
  );
}

export default App;
































// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [format, setFormat] = useState('video');
//   const [downloadLink, setDownloadLink] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     setError('');
//     setDownloadLink('');
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/download', { videoUrl, format });
//       const fileUrl = `http://localhost:5000${res.data.file}`;
//       setDownloadLink(fileUrl);
//     } catch (err) {
//       setError('❌ Download failed. Try another URL.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app">
//             <h1>YouTube Downloader</h1>
//       <p>Paste your YouTube URL and choose format</p>

//       <input
//         type="text"
//         placeholder="https://youtube.com/..."
//         value={videoUrl}
//         onChange={(e) => setVideoUrl(e.target.value)}
//       />

//       <select value={format} onChange={(e) => setFormat(e.target.value)}>
//         <option value="audio">🎧 Audio (.mp3)</option>
//       </select>

//       <button onClick={handleDownload} disabled={loading}>
//         {loading ? 'Processing...' : 'Download Now'}
//       </button>

//       {error && <p className="error">{error}</p>}

//       {downloadLink && (
//         <div className="download-box">
//           ✅ Your file is ready: <br />
//           <a href={downloadLink} download>👉 Click here to download</a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;






























// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [format, setFormat] = useState('audio'); // Default to audio
//   const [downloadLink, setDownloadLink] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  

//   // const handleDownload = async () => {
//   //   setError('');
//   //   setLoading(true);
//   //   try {
//   //     const res = await axios.post('http://localhost:5000/download', { videoUrl, format });
//   //     const fileUrl = `http://localhost:5000${res.data.file}`;

//   //     // Auto download
//   //     const a = document.createElement('a');
//   //     a.href = fileUrl;
//   //     a.setAttribute('download', '');
//   //     document.body.appendChild(a);
//   //     a.click();
//   //     a.remove();

//   //     setDownloadLink(fileUrl); // Optional: still show download link
//   //   } catch (err) {
//   //     setError('❌ Download failed. Try another URL.');
//   //     console.error(err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   //   const handleDownload = async () => {
//   //   setError('');
//   //   setLoading(true);
//   //   try {
//   //     const res = await axios.post('http://localhost:5000/download', { videoUrl, format });
//   //     const fileName = res.data.file.split('/').pop(); // extract filename only
//   //     const fileUrl = `http://localhost:5000/force-download/${fileName}`;

//   //     // Auto download
//   //     const a = document.createElement('a');
//   //     a.href = fileUrl;
//   //     a.setAttribute('download', '');
//   //     document.body.appendChild(a);
//   //     a.click();
//   //     a.remove();

//   //     setDownloadLink(fileUrl); // Optional: display backup link
//   //   } catch (err) {
//   //     setError('❌ Download failed. Try another URL.');
//   //     console.error(err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleDownload = async () => {
//     setError('');
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/download', { videoUrl, format });
//       const fileName = res.data.file.split('/').pop(); // get only filename
//       const fileUrl = `http://localhost:5000/force-download/${fileName}`;

//       // ❌ Remove this part ↓↓↓ (no auto download)
//       // const a = document.createElement('a');
//       // a.href = fileUrl;
//       // a.setAttribute('download', '');
//       // document.body.appendChild(a);
//       // a.click();
//       // a.remove();

//       setDownloadLink(fileUrl); // ✅ show link for user to click
//     } catch (err) {
//       setError('❌ Download failed. Try another URL.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <div style={{ padding: 20 }}>
//       <h2>YouTube Audio Downloader</h2>

//       <input
//         type="text"
//         value={videoUrl}
//         onChange={e => setVideoUrl(e.target.value)}
//         placeholder="Enter YouTube URL"
//         style={{ width: '80%', marginBottom: 10 }}
//       />

//       <br />
//       <select value={format} onChange={e => setFormat(e.target.value)}>
//         <option value="audio">Audio (.mp3)</option>
//         <option value="video">Video (.webm)</option>
//       </select>

//       <br /><br />
//       <button onClick={handleDownload} disabled={loading}>
//         {loading ? 'Processing...' : 'Download'}
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* {downloadLink && (
//         // <div style={{ marginTop: 20 }}>
//         //   ✅ File ready: <a href={downloadLink} download>Click here to download</a>
//         // </div>
//         <a href={downloadLink}>
//           Click here to download
//         </a>

//       )} */}
//       {downloadLink && (
//         <div style={{ marginTop: 20 }}>
//           <a href={downloadLink} download>
//             👉 Click here to download
//           </a>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;


































// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [url, setUrl] = useState('');
//   const [format, setFormat] = useState('video');
//   const [downloadLink, setDownloadLink] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleDownload = async () => {
//     setDownloadLink('');
//     setLoading(true);
//     setError('');
//     try {
//       const res = await axios.post('http://localhost:5000/download', {
//         videoUrl: url,
//         format: format,
//       });

//       if (res.data.file) {
//         const link = `http://localhost:5000${res.data.file}`;
//         setDownloadLink(link);
//       } else {
//         setError('Download failed: no file returned');
//       }
//     } catch (e) {
//       console.error(e);
//       setError('Download failed. Try a different URL.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>YouTube Video/Audio Downloader</h2>

//       <input
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Paste YouTube video URL"
//         style={{ width: '70%', marginRight: 10 }}
//       />

//       <select value={format} onChange={(e) => setFormat(e.target.value)}>
//         <option value="video">Video (.webm)</option>
//         <option value="audio">Audio (.mp3)</option>
//       </select>

//       <br /><br />
//       <button onClick={handleDownload} disabled={loading}>
//         {loading ? 'Processing...' : 'Download'}
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {downloadLink && (
//         <div style={{ marginTop: 20 }}>
//           ✅ File is ready:{" "}
//           <a href={downloadLink} download>
//             👉 Click here to download
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




























// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [downloadLink, setDownloadLink] = useState('');

//   const handleDownload = async () => {
//     try {
//       const res = await axios.post('http://localhost:5000/download', {
//         videoUrl,
//         format: 'audio', // or 'video'
//       });

//       // ✅ Set full download link here
//       setDownloadLink(`http://localhost:5000${res.data.file}`);
//     } catch (err) {
//       console.error('❌ Error downloading:', err);
//     }
//   };

//   return (
//     <div>
//       <h1>YouTube Downloader</h1>
//       <input
//         type="text"
//         value={videoUrl}
//         onChange={e => setVideoUrl(e.target.value)}
//         placeholder="Paste YouTube URL"
//       />
//       <button onClick={handleDownload}>Download</button>

//       {downloadLink && (
//         <a href={downloadLink} download>
//           👉 Click here to download
//         </a>
//       )}
//     </div>
//   );
// }

// export default App;

























// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [url, setUrl] = useState('');
//   const [format, setFormat] = useState('audio');
//   const [downloadLink, setDownloadLink] = useState('');
//   const [fileName, setFileName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     setLoading(true);
//     setDownloadLink('');
//     setFileName('');
//     try {
//       const response = await axios.post('http://localhost:5000/download', {
//         videoUrl: url,
//         format: format,
//       });

//       const filePath = response.data.file; // e.g. /downloads/video_1750.mp3
//       const fileNameOnly = filePath.split('/').pop();

//       setDownloadLink(`http://localhost:5000${filePath}`);
//       setFileName(fileNameOnly);
//     } catch (error) {
//       console.error('Download failed:', error);
//       alert('❌ Download failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h1>🎥 YouTube Downloader</h1>
//       <input
//         type="text"
//         placeholder="Enter YouTube URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         style={{ width: '300px', padding: '8px' }}
//       />
//       <select
//         value={format}
//         onChange={(e) => setFormat(e.target.value)}
//         style={{ marginLeft: '10px', padding: '8px' }}
//       >
//         <option value="audio">Audio (MP3)</option>
//         <option value="video">Video (MP4)</option>
//       </select>
//       <button
//         onClick={handleDownload}
//         disabled={loading || !url}
//         style={{ marginLeft: '10px', padding: '8px 12px' }}
//       >
//         {loading ? 'Processing...' : 'Download'}
//       </button>

//       {downloadLink && (
//         <div style={{ marginTop: '20px' }}>
//           ✅ Your file <strong>{fileName}</strong> is ready:
//           <br />
//           {/* <a href={downloadLink} target="_blank" rel="noopener noreferrer">
//             👉 Click here to download
//           </a> */}
// <a href={`http://localhost:5000${data.file}`} download>
//             Click here to download
//           </a>




//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
