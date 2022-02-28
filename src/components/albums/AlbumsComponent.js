import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Albums(){
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        let res = await window.fetch('http://localhost:5500/albums')
        res = await res.json()
        setAlbums(res)
    }
    fetchData() 
}, [])

return(
    <Container>
        <h1>Albums available in the store: </h1>
        <ul className="list-group">
            {albums.map(album =>
                <li className="list-group-item" key={album.id}>
                    <Link to={'/albums/'+ album.id}>
                        <b>{album.title}</b>, by {album.band}
                    </Link>
                </li>
                )}
        </ul>
    </Container>
)

}

export default Albums