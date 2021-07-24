export function Paper({ children }) {
  return (
    <span>
      <div
        style={{
          padding: '1em',
          margin: '25px',
          backgroundColor: 'rgba(240, 240, 240, 0.75)',
          borderRadius: '0.25em',
          filter: 'drop-shadow(4px 4px 0.0625em #888)',
        }}
      >
        {children}
      </div>
    </span>
  )
}
