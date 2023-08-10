
import { Row, Col } from 'reactstrap'
const Header = () => {
    return (
        <>
            <Row className='header-home' >
                <Col className='header-div' xs={2}>
                    <img className='header-icon' src='https://play-lh.googleusercontent.com/zIQ_h1wRUhskvV3kCByMd5G2HERu6Ev39DLu3cnGbGcmddfiE2Jj4VDm_J2Kz13v-35G' alt="no Image" />
                    <div className="logo">Luck-O-Meter</div>
                </Col>
                <Col xs={10} >
                    <div className='inner-tabs-container'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Service</p>
                        <p>Games</p>
                        <p>Subscribe</p>
                        <p>Tournament</p>
                        <div className='straight-line'></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Header