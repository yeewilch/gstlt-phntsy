const Labels = () => {
    return(
        <div className='main'>
            <a href="https://soundcloud.com/gestaltlabel"
                title="Gestalt Records"
                target="_blank"
                style={linkStyle}>
                    <h4>Gestalt Records</h4>
            </a>
            <iframe width="100%"
                    height="450"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/800814480&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
            <div style={divStyle}>
                <a href="https://soundcloud.com/gestaltlabel/sets/releases"
                    title="Releases"
                    target="_blank"
                    style={linkStyle}>Releases</a>
            </div>
        </div>
    )
}

// TODO: Automate and generate styles automatically
const divStyle = {
    fontSize: '10px',
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: 'Receipt',
    fontWeight: 100,
}

const linkStyle = {
    textDecoration: 'none'
}

export default Labels
