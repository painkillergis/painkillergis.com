import Brand from './components/Brand'
import Guttered from './components/Guttered'
import Splash from './components/Splash'

function App() {
  return (
    <>
      <Splash />
      <Guttered>
        <Brand />
        <div>
          <p>Learn topography with fun 3D puzzles</p>
        </div>
      </Guttered>
    </>
  )
}

export default App
