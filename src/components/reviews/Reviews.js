import React from 'react'
import {useEffect, useRef} from 'react'
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import moment from 'moment-timezone';

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, []);

    const addReview = async e => {
        e.preventDefault();
        const rev = revText.current;
        // console.log(rev.value);
        try {
            const response = await api.post('/api/v1/reviews', {
                body: rev.value,
                imdbId: movieId
            });
            const updatedReviews = [...reviews, {body: rev.value}];
            rev.value = '';
            setReviews(updatedReviews);
        } catch(err) {
            console.log('-------------------------------');
            console.log(err);
        }
    };

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt=''/>
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm
                                        handleSubmit={addReview}
                                        revText={revText}
                                        labelText='Write a review?'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr/>
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map(r => {
                            return <>
                                <Row>
                                    <Col>
                                        <strong>
                                            {moment(r?.id?.date).tz('America/Sao_Paulo').format('YYYY/MM/DD HH:mm')}
                                        </strong>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <hr/>
                            </>
                        }
                        )
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews