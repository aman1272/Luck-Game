import { Row, Col } from 'reactstrap'
const Footer = () => {
    return (
        <>
            <div>

                <Row className="Footer-main">
                    <Col>
                        <div>
                            <img className='header-icon' src='https://play-lh.googleusercontent.com/zIQ_h1wRUhskvV3kCByMd5G2HERu6Ev39DLu3cnGbGcmddfiE2Jj4VDm_J2Kz13v-35G' alt="no Image" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio odit corrupti aliquam cupiditate unde suscipit, voluptas officia incidunt, molestias odio dolores consequatur quibusdam nulla delectus dignissimos excepturi quod nihil quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="Footer-menu" >

                            <h1>Quick Links</h1>
                            <div>
                                <p>Home</p>
                                <p>About</p>
                                <p>Portfolio</p>
                                <p>Career</p>
                                <p>Blog</p>
                                <p>Contacts</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Footer-menu" >
                            <h1>Our Services</h1>
                            <p>Service</p>
                            <p>Games</p>
                            <p>Subscribe</p>
                            <p>Tournament</p>
                            <p>Support</p>
                            <div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Footer-menu" >
                            <h1>Subscribe</h1>
                            <div>
                                <div >info@luckgames.com</div>
                                <div >support@luckgames.com</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='footer-end'>
                    © 2023 Luck-O-Game Services Pvt. Ltd.
                </div>
            </div>
        </>
    )
}
export default Footer