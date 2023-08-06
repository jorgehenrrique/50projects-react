import { useEffect, useState } from 'react';
import './ContentPlaceholder.css';

export default function ContentPlaceholder() {
  useEffect(() => {
    document.title = 'Content Placeholder';
  }, []);

  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState(null);
  const [title, setTitle] = useState(null);
  const [excerpt, setExcerpt] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setTimeout(getData, 2500);

    return (() => {
      setLoading(true);

      setHeader(null);
      setTitle(null);
      setExcerpt(null);
      setProfileImg(null);
      setName(null);
      setDate(null);
    });
  }, []);

  function getData() {
    setLoading(false);

    setHeader(<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Imagem de fundo" />);
    setTitle('Lorem ipsum dolor sit amet');
    setExcerpt('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis');
    setProfileImg(<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Imagem perfil" />);
    setName('John Doe');
    setDate('Oct 08, 2020');
  }

  return (
    <div className='body-24'>

      <div className="card-24">
        <div className={`card-header-24 ${loading && 'animated-bg'}`}>{loading ? '\u00A0' : null}{header}</div>

        <div className="card-content-24">
          <h3 className={`card-title-24 ${loading && 'animated-bg animated-bg-text'}`}>{loading ? '\u00A0' : null}{title}</h3>
          <p className="card-excerpt-24">{loading ? '\u00A0' : null}{excerpt}
            {loading &&
              <>
                <span className="animated-bg animated-bg-text">{loading ? '\u00A0' : null}</span>
                <span className="animated-bg animated-bg-text">{loading ? '\u00A0' : null}</span>
                <span className="animated-bg animated-bg-text">{loading ? '\u00A0' : null}</span>
              </>}
          </p>

          <div className="author-24">
            <div className={`profile-img-24 ${loading && 'animated-bg'}`}>{loading ? '\u00A0' : null}{profileImg}</div>
            <div className="author-info-24">
              <strong className={loading && 'animated-bg animated-bg-text'}>{loading ? '\u00A0' : null}{name}</strong>
              <small className={loading && 'animated-bg animated-bg-text'}>{loading ? '\u00A0' : null}{date}</small>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}