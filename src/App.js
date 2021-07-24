import brand from './components/brand.svg'
import Guttered from './components/Guttered'
import Splash from './components/Splash'
import { Paper } from './components/Paper'
import { Headline } from './components/Headline'
import { UsefulLink, UsefulLinks } from './components/UsefulLinks'

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
        <a
          href="https://parcels.painkillergis.com"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Paper>
            <Headline>parcels</Headline>
            <p>Hubbard Parcels</p>
          </Paper>
        </a>
        <UsefulLinks>
          <UsefulLink href="https://hubbardcounty.maps.arcgis.com/apps/webappviewer/index.html?id=405588666bba4397982b98b3fd382f62">
            Hubbard County MN GIS
          </UsefulLink>
          <UsefulLink href="https://gis.co.wadena.mn.us/link/jsfe/index.aspx">
            Wadena County MN GIS
          </UsefulLink>
          <UsefulLink href="https://factoriolab.github.io">
            FactorioLab Calculator
          </UsefulLink>
        </UsefulLinks>
      </Guttered>
    </>
  )
}

export default App
