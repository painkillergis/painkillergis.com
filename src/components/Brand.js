import brand from './brand.svg'

function Brand() {
  return (
    <>
      <img style={{ float: 'left' }} src={brand} alt="brand" width="75px" />
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
