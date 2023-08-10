import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='banner' >
      <Carousel
        stopOnHover={true}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        autoFocus={true}
        emulateTouch={true}
        interval={2000}
      >
        <div>
          <img src="https://i0.wp.com/www.ttrpgkids.com/wp-content/uploads/2021/12/Luck-of-Legends-banner.png?fit=600%2C200&ssl=1" />
          <p className="legend">Points 1 indicates that your Very Bad Luck</p>
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/3fa062_f0f5e97b23d04821ace94dade44158e8~mv2.png/v1/fill/w_1072,h_334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LS%20Website%20Banner-01.png" />
          <p className="legend">Points 2 indicates that your Bad Luck</p>
        </div>
        <div>
          <img src="https://www.shutterstock.com/image-illustration/game-luck-banner-horizontal-concept-260nw-1051559801.jpg" />
          <p className="legend">Points 3 indicates that your Medium Luck</p>
        </div>
        <div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82a08e2e-112f-4ed9-9d60-5c676d03a190/dcmz4u3-f6881feb-9782-42f4-93e6-4120475bb567.png/v1/fill/w_1024,h_576,q_80,strp/luckygaming___twitter_banner__by_youngjustice2k11_dcmz4u3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyYTA4ZTJlLTExMmYtNGVkOS05ZDYwLTVjNjc2ZDAzYTE5MFwvZGNtejR1My1mNjg4MWZlYi05NzgyLTQyZjQtOTNlNi00MTIwNDc1YmI1NjcucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC84MmEwOGUyZS0xMTJmLTRlZDktOWQ2MC01YzY3NmQwM2ExOTBcL3lvdW5nanVzdGljZTJrMTEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.v1_qQm-a9uVOzrbhDBJHwWaSfD5R616Pt5DWKvx0NrY" />
          <p className="legend">Points 4 indicates that your Good Luck</p>
        </div>
        <div>
          <img src="https://live.staticflickr.com/65535/49421061778_d92dc367d6_b.jpg" />
          <p className="legend">Points 5 indicates that your Better Luck</p>
        </div>
      </Carousel>
      <div className="bg">
        <div className="content">
          <h2>A New Home For <br />
            Game Lovers
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat!</p>
          <a href="#" className='btn'>Join Now</a>
        </div>
        <img src='https://toomkygames.com/wp-content/uploads/default/games/small/Astrology-320x240.jpg' alt="" />
      </div>
    </div>
  )
}

export default Banner