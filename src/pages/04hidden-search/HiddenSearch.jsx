import { useEffect, useState } from 'react';
import './HiddenSearch.css';
import lupa from './img/lupa.png';

export default function HiddenSearch() {
  document.title = 'Hidden Search';

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.querySelector('.imput-search04').focus();
    }
  }, [open]);
  const handleOpen = () => setOpen(!open);

  return (
    <div className='container-04'>
      <input className={`imput-search04 ${open ? 'open04' : ''}`}
        type="text" placeholder='Buscar...' />
      <button className={`btn-04 ${open ? 'open04' : ''}`}
        onClick={handleOpen}><img src={lupa} /></button>
    </div>
  );
}