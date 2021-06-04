import Brand from './components/Brand'
import Guttered from './components/Guttered'
import Splash from './components/Splash'
import { Paper } from './components/Paper'

function App() {
  return (
    <>
      <Splash />
      <Guttered>
        <Paper>
          <Brand />
          <div>
            <p>Learn topography with fun 3D puzzles</p>
          </div>
        </Paper>
      </Guttered>
    </>
  )
}

export default App
