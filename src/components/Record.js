import { eachSeries } from "async"

const Record = () => {
    return(
        <div className='record-wrapper' style={ayStyle}>
            <img style={recordStyle} src='record-pn.svg' />
        </div>
    )
}

const ayStyle = {
    height: '200px',
}

const recordStyle = {
    position: 'absolute',
    width: '10%',
    bottom: '-50px',
    right: '-50px',
    animation: 'record 3s ease infinite',
    transformOrigin: 'center',
    transformBox: 'fill-box',
}

export default Record
