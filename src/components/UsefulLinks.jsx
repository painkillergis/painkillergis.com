import { Headline } from './Headline'
import { Paper } from './Paper'

export function UsefulLinks({ children }) {
  return (
    <Paper>
      <Headline>Useful Links</Headline>
      <div style={{ margin: '0.5em 0' }}>
        {children}
      </div>
    </Paper>
  )
}

export function UsefulLink(props) {
  return (
    <a
      style={{
        display: 'block',
        margin: '0.5em 0',
        textDecoration: 'none',
        color: '#555599',
        fontWeight: 'bold',
      }}
      {...props}
    />
  )
}
