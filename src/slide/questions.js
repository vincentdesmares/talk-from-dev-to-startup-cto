import React from 'react'
import { Heading, Slide, Text } from 'spectacle'

const fireworksStyle = `.pyro >.before,
.pyro>.after {
  position: absolute;
  z-index: 10;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-shadow: 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #eef442, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #2ddce5, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #5ff248, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f24330, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9, 0 0 #f442d9;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro>.after {
  animation-delay: 1.25s, 1.25s, 1.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@keyframes bang {
  to {
    box-shadow: 65px -166.66667px #f2ff00, -66px -110.66667px #b300ff, -195px -12.66667px #a6ff00, -229px -141.66667px #0009ff, 191px 80.33333px #55ff00, -188px -415.66667px #00aaff, -194px -276.66667px #c800ff, 39px -175.66667px #ff9900, 110px -64.66667px #ff6200, 202px -297.66667px #ff0026, -203px -28.66667px #00c4ff, 233px -63.66667px #00ddff, -128px -145.66667px #00fff7, -216px -386.66667px #00d0ff, -152px -372.66667px #ff8000, 8px 61.33333px #2bff00, 49px -388.66667px #0066ff, 114px -243.66667px #00e6ff, -224px -382.66667px #003cff, -101px -224.66667px #00d0ff, 92px -255.66667px #51ff00, 207px -272.66667px #2bff00, 225px -244.66667px #00d0ff, -13px -189.66667px #33ff00, 200px -278.66667px #3c00ff, -225px -101.66667px #f700ff, 53px -292.66667px #000dff, 84px -340.66667px #ff1a00, -72px -72.66667px #ff5500, 111px 9.33333px #00ff6a, -206px -74.66667px #04ff00, 98px -14.66667px #77ff00, 241px -106.66667px #00ffa6, 69px -361.66667px #4400ff, 242px 7.33333px #00ff40, -102px -76.66667px #7700ff, 11px -84.66667px #44ff00, -104px -128.66667px #ff7700, -244px -223.66667px #ff00e6, 97px -127.66667px #88ff00, -115px -272.66667px #ff006f, -66px 74.33333px #aa00ff, 125px 65.33333px #00ffee, -202px -239.66667px #bf00ff, -25px -242.66667px #ff2600, -144px -177.66667px #0055ff, 215px -152.66667px #ffb700, 132px -66.66667px #5900ff, 135px -241.66667px #00ff33, -236px 55.33333px #ff5e00, 73px -30.66667px #6fff00;
  }
}

@keyframes gravity {
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}`

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <style>{fireworksStyle}</style>

    <Heading size={2} textColor="pink" caps>
      We're done!
    </Heading>
    <Text bold textColor="blue">
      Questions?
    </Text>
    <Text textSize={30} style={{ marginTop: 50 }}>
      <a
        className="dib"
        href="https://github.com/vincentdesmares/from-dev-to-startup-cto"
      >
        https://github.com/vincentdesmares/from-dev-to-startup-cto
      </a>
    </Text>
    <div
      className="pyro"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <div className="before" />
      <div className="after" />
    </div>
  </Slide>
)
