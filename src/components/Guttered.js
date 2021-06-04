function Guttered({ children }) {
  return (
    <div
      className="guttered"
      style={{
        display: 'flex',
        marginLeft: '4em',
        marginRight: '4em',
        paddingTop: '25px',
      }}
    >
      {children}
    </div>
  )
}
export default Guttered
