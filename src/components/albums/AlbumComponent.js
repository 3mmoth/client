import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'


export function Album(){
    const [album, setAlbum] = useState({})
    const [band, setBand] = useState([])
    const [score, setScore] = useState('')
    let param = useParams()

    useEffect(() => {
        const fetchData = async () => {
        let res = await window.fetch(`http://localhost:5500/albums/${param.id}`)
        res = await res.json()
        setAlbum(getAlbum(res))
        setScore(res[0].score)
        let bands = []
        for(let obj in res) {
            bands.push(res[obj].band)
        }
        setBand(bands)
    }
    fetchData()
    }, [param.id])

    const reviews = () => {
        return score > 0 ?
            <Link to={'/reviews/' + param.id} >
                View reviews
            </Link>
            : <p>This album hasn't been reviewd yet</p>
    }

    const getAlbum = (albums) => {
        return{
            title: albums[0].title,
            genre: albums[0].genre,
            release_year: albums[0].release_year,
            band: albums.map(album => album.band)
        }
    }

    return(
        <Container>
            <div key={album.title}>
                <h3 className='mt-2'>{album.title}</h3>
                <p>Band: {band.map(band => <i key={band}> {band}</i>)}</p>
                <p>Genre: {album.genre}</p>
                <p>Release Year: {album.release_year}</p>
                <p>Score: {score > 0 ? score : 'The album hasn\'t been reviewed'}</p>
            </div>

            <div>
                {reviews()}
            </div>
        </Container>
    )
}

export default Album