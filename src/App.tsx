import { BerlinClockView } from './components/BerlinClockView.tsx';
import { useCurrentTime } from './hooks/useCurrentTime.ts';
import './App.css';

function App() {
  const time = useCurrentTime();

  return (
    <main className='app'>
      <header>
        <h1>Berlin Clock</h1>
      </header>
      <BerlinClockView time={time} />
    </main>
  );
}

export default App;
