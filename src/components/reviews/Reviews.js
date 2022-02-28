import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Container } from 'reactstrap'

export function Reviews(){
    const[reviews, setReviews] = useState([])
    const [title, setTitle] = useState('')
    let param = useParams()

    useEffect(() => {
        const fetchData = async () =>{
        let res = await window.fetch(`http://localhost:5500/reviews/${param.id}`)
        res = await res.json()
        setReviews(res)
        setTitle(res[0].title)
        }
        fetchData()
    }, [param.id])

    return(
        <Container>
        <h3> {title} - Comments: </h3>
        { reviews.map(review => 
            <section key={review.user}>
                <p>Score: {review.score}</p>
                <p>Comment: {review.comment}</p>
                <p><b>User: {review.user}</b></p>
                <hr />
            </section>) }
        </Container>
    )
}

export default Reviews