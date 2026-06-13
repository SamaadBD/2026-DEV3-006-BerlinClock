import { Lamp } from './components/Lamp.tsx';
import { LampRow } from './components/LampRow.tsx';
import './App.css';

function App() {
  return (
    <main className='app'>
      <header>
        <h1>Berlin Clock</h1>
      </header>

      <section className='berlin-clock'>
        <div className='lamp-row lamp-row--seconds'>
          <Lamp color='Y' variant='seconds' position='single' />
        </div>

        <LampRow
          lamps={['R', 'R', 'R', 'O']}
          label='Five hours'
          variant='wide'
        />
        <LampRow lamps={['R', 'R', 'R', 'O']} label='One hour' variant='wide' />
        <LampRow
          lamps={['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'O', 'O', 'O', 'O']}
          label='Five minutes'
          variant='narrow'
        />
        <LampRow
          lamps={['O', 'O', 'O', 'O']}
          label='One minute'
          variant='wide'
        />
      </section>
    </main>
  );
}

export default App;
