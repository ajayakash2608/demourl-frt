import React, { useState } from 'react';
import axios from 'axios';

const URLShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const shortenUrl = async () => {
    if (!longUrl) {
      setError('Please enter a URL');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.tinyurl.com/create',
        {
          url: longUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TINYURL_API_TOKEN}`, // Using your token from .env
            'Content-Type': 'application/json',
          },
        }
      );
      setShortUrl(response.data.data.tiny_url);
      setLongUrl(''); // Clear input after success
    } catch (error) {
      setError('Error creating short URL. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setLongUrl('');
    setShortUrl('');
    setError('');
  };

  return (
    <div style={styles.container}>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={styles.input}
        disabled={loading}
      />
      <button onClick={shortenUrl} style={styles.button} disabled={loading}>
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>
      <button onClick={handleReset} style={styles.resetButton}>
        Reset
      </button>
      {shortUrl && (
        <div>
          <h3>
            Shortened URL:{' '}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </h3>
        </div>
      )}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28C8B8',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginLeft: '10px',
  },
  error: {
    color: 'red',
    marginTop: '20px',
  },
};

export default URLShortener;
