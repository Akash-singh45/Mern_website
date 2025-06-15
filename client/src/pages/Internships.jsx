import { useEffect, useState } from 'react';

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/internships')
      .then(res => res.json())
      .then(data => {
        setInternships(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading internships...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Internships</h1>
      <ul>
        {internships.map((internship) => (
          <li key={internship._id} style={{ margin: '1rem 0' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'blue',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
              onClick={() => window.open(internship.googleFormUrl, '_blank')}
            >
              {internship.title}
            </button>
          </li>
        ))}
      </ul>
      {internships.length === 0 && <div>No internships available right now.</div>}
    </div>
  );
}