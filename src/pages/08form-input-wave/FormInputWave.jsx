import { useEffect } from 'react';

export default function FormInputWave() {
  useEffect(() => {
    document.title = 'Form Input Wave';
  }, []);
  return (
    <h1>Form Input Wave</h1>
  );
}