import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

export function Bands(){
    const [bands, setBands] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        let res = await window.fetch('http://localhost:5500/bands')
        res = await res.json()
        setBands(res)
    }
    fetchData() 
}, [])

return(
    <Container>
        <h1>Bands and solo artists with albums available in the store: </h1>
        <ul className="list-group">
            {bands.map(band =>
                <li className="list-group-item" key={band.id}>
                    <Link to={`/bands/${band.id}`}>
                        {band.band}
                    </Link>
                </li>
                )}
        </ul>
    </Container>
)

}

export default Bands