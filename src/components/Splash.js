import splash from './splash.png'

function Splash() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        zIndex: -1,
      }}
    >
      <img
        style={{
          filter: 'grayscale(75%) contrast(75%) brightness(175%)',
          position: 'absolute',
          minWidth: '50%',
          minHeight: '50%',
          margin: 'auto',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        alt="Orthographic side-view of a low-poly terrain model"
        src={splash}
      />
    </div>
  )
}

export default Splash
