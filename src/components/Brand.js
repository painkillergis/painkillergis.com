import brand from './brand.svg'

function Brand() {
  return (
    <>
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
        tinfoil
      </span>
    </>
  )
}

export default Brand
