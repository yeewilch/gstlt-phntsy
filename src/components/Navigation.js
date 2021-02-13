import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <div className='sidenav'>
          <nav className='nav-links'>
            <GeneraInformation />
            <NavigationLinks />
            <ImageWrapper />
          </nav>
        </div>
    )
}

const NavigationLinks = () => {
    return(
        <div>
            <Link to='/'>
                About Us
            </Link>
            <Link to='/labels'>
                Featured Labels
            </Link>
        </div>
    )
}

const GeneraInformation = () => {
    return(
        <div className='about-us'>
            <p style={{ fontWeight: 'bold' }}>PHANTASYNET</p>
            <p style={{ fontSize: '18px' }}>Tallinn, Estonia</p>
        </div>
    )
}

const ImageWrapper = () => {
    return(
        <div className='img-wrapper'>
            <img style={{ width: '100%' }} src='heavy-liftin.jpeg'/>
        </div>
    )
}

export default Navigation
