import brand from './components/brand.svg'
import Guttered from './components/Guttered'
import Splash from './components/Splash'
import { Paper } from './components/Paper'
import { Headline } from './components/Headline'
import UsefulLinks from './components/UsefulLinks'

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
              marginRight: '12.5px',
            }}
            src={brand}
            alt="brand"
          />
          <Headline>tinfoil</Headline>
          <p>Learn topography with fun 3D puzzles</p>
        </Paper>
        <a
          href="https://lattice.painkillergis.com"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Paper>
            <Headline>lattice</Headline>
            <p>Cell phone tower game</p>
          </Paper>
        </a>
        <UsefulLinks />
      </Guttered>
    </>
  )
}

export default App
