import { useEffect, useState } from 'react';
import './LiveUserFilter.css';

export default function LiveUserFilter() {
  useEffect(() => {
    document.title = 'Live User Filter';
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('https://randomuser.me/api?results=50')
      .then(result => {
        if (result.status === 200 && result.ok) {
          return result.json();
        }
      }).then(result => setData(result.results));
  }
  console.log(data);

  return (
    <div className='body-42'>

      <div className="container-42">
        <header>
          <h4>Live User Filter</h4>
          <small>Search by name and/or location</small>
          <input type="text" placeholder="Search" />
        </header>

        <ul>
          {!data && <li><h3>Loading...</h3></li>}
          {data && data.map((user, idx) => {
            return (
              <li key={idx}>
                <img src={user.picture.large} alt={user.name.first} />
                <div className='user-info-42'>
                  <h4>{user.name.first} {user.name.last}</h4>
                  <p>{user.location.city}, {user.location.country}</p>
                </div>
              </li>)
          })}
        </ul>
      </div>

    </div>);
}