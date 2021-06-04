import brand from './components/brand.svg'
import Guttered from './components/Guttered'
import Splash from './components/Splash'
import { Paper } from './components/Paper'

function App() {
  return (
    <>
      <Splash />
      <Guttered>
        <Paper>
          <img
            style={{
              float: 'left',
              width: '75px',
              filter: 'drop-shadow(2px 2px 1px #555)',
            }}
            src={brand}
            alt="brand"
          />
          <span
            style={{
              fontSize: '36px',
              margin: '25px',
              marginLeft: '12.5px',
            }}
          >
            tinfoil{' '}
          </span>
          <div>
            <p>Learn topography with fun 3D puzzles</p>
          </div>
        </Paper>
      </Guttered>
    </>
  )
}

export default App
