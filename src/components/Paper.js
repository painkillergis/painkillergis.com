export function Paper({ children }) {
  return (
    <div
      style={{
        display: 'inline-block',
        padding: '1em',
        backgroundColor: 'rgba(240, 240, 240, 0.75)',
        borderRadius: '0.25em',
        filter: 'drop-shadow(4px 4px 0.0625em #888)',
      }}
    >
      {children}
    </div>
  )
}
