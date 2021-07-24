import { Headline } from './Headline'
import { Paper } from './Paper'

export default function UsefulLinks() {
  return (
    <Paper>
      <Headline>Useful Links</Headline>
      <div style={{ margin: '0.5em 0' }}>
        <Link href="https://hubbardcounty.maps.arcgis.com/apps/webappviewer/index.html?id=405588666bba4397982b98b3fd382f62">
          Hubbard County MN GIS
        </Link>
        <Link href="https://gis.co.wadena.mn.us/link/jsfe/index.aspx">
          Wadena County MN GIS
        </Link>
      </div>
    </Paper>
  )
}

function Link(props) {
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
