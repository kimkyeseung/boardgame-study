import { Link } from '../lib/utils'
import App from './src/App'
import Splender from './src/components/Splender'

export default function Azanghs() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <App />
      <Splender/>
    </div>
  )
}
