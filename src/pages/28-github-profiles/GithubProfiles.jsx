import { useEffect, useRef, useState } from 'react';
import './GithubProfiles.css';

export default function GithubProfiles() {
  useEffect(() => {
    document.title = 'Github Profiles';
  }, []);

  const APIURL = 'https://api.github.com/users/'
  const inputSearch = useRef(null);
  const [githubData, setGithubData] = useState(null);
  const [githubRepos, setGithubRepos] = useState(null);
  const [msgError, setMsgError] = useState(null);

  useEffect(() => {
    return (() => {
      setGithubData(null);
      setGithubRepos(null);
      setMsgError(null);
    })
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const user = inputSearch.current.value.trim();
      if (user) {
        getUser(user);
        getRepos(user);
        inputSearch.current.value = '';
      }
    }
  };

  const getUser = (username) => {
    fetch(`${APIURL}${username}`)
      .then((res) => {
        if (res.status == 404) {
          setMsgError(<div className='card-28'><h1>No profile with this username</h1></div>);
        } else if (res.status === 200) {
          setMsgError(null);
          return res.json();
        } else {
          setMsgError(<div className='card-28'><h1>Service currently unavailable</h1></div>);
        }
      })
      .then((data) => setGithubData(data))
      .catch((err) => {
        setMsgError(<div className='card-28'><h1>{err}</h1></div>);
      })
  };

  const getRepos = (username) => {
    fetch(`${APIURL}${username}/repos?sort=created`)
      .then((res) => {
        if (res.status === 200) {
          setMsgError(null);
          return res.json();
        } else {
          setMsgError(<div className='card-28'><h1>Service currently unavailable</h1></div>);
        }
      })
      .then((data) => setGithubRepos(data))
      .catch(() => {
        setMsgError(<div className='card-28'><h1>Problem fetching repos</h1></div>);
      })
  };

  return (
    <div className='body-28'>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='Search a Github User'
          ref={inputSearch}
          onKeyUpCapture={handleSearch} />
      </form>

      <main>
        {githubData && (
          <>
            <div className="card-28">
              <div>
                <img src={githubData.avatar_url} alt={githubData.name} className='avatar-28' />
              </div>

              <div className="user-info-28">
                <h2>{githubData.name || githubData.login}</h2>
                {githubData.bio && <p>{githubData.bio}</p>}
                <ul>
                  <li>{githubData.followers} <strong>Fallowers</strong></li>
                  <li>{githubData.following} <strong>Fallowing</strong></li>
                  <li>{githubData.public_repos} <strong>Repos</strong></li>
                </ul>

                {githubRepos && <div className="repos-28">
                  {githubRepos.slice(0, 6).map((repo, idx) => {
                    return (
                      <a key={idx}
                        className='repo-28'
                        href={repo.html_url}
                        target='_blank'
                        rel="noreferrer">{repo.name}</a>
                    )
                  })}
                </div>}
              </div>
            </div>
          </>
        )}
        {msgError && msgError}
      </main>

    </div >
  );
}