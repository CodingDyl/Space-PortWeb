import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleteing] = useState(false);
    const toRotate = [
        "Web Developer",
        "Software Engineer",
        "App Developer"
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 200;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleteing(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleteing(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi i'm Dylan Petzer `} <span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique reprehenderit totam sequi alias, doloribus quisquam itaque, blanditiis, suscipit eos minima modi repudiandae dolore. Odio repellendus cupiditate expedita architecto itaque amet!</p>
                        <button onClick={() => console.log('Clicked')} className=''>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}