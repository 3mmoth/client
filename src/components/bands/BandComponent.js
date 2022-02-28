import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

export function Band (){
    const [albums, setAlbums] = useState([])
    const [name, setName] = useState('')
    const band = useParams()

    useEffect(() => {
        const fetchData = async () => {
            let res = await window.fetch(`http://localhost:5500/bands/${band.id}`)
            res = await res.json()
            setAlbums(res)
            setName(res[0].band)
        }
        fetchData()
    }, [band.id])

    return(
        <Container>
            <h3> { name } </h3>
            <div>
                <ul>
                    {albums.map(album => 
                        <li className="list-group-item" key={album.id}>
                            <Link to={'/albums/' + album.id}>
                                {album.title}
                            </Link>
                        </li>)}
                </ul>
            </div>
        </Container>
    )

}

export default Band