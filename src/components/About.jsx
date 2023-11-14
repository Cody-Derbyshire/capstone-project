import '../css/About.css';
import TopBanner from './TopBanner';
import webLogo from '../assets/bg-branding-svg-web.svg';
import aboutImage1 from '../assets/about-images-01.svg';
import aboutImage2 from '../assets/about-images-02.svg';
import aboutImage3 from '../assets/about-images-03.svg';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopBanner content={{ title: 'about us' }} />
      <div className='back-btn-wrapper contact'>
        <motion.a
          onClick={() => navigate(-1)}
          className='back-btn'
          whileHover={{
            scale: 1.05,
            textDecoration: 'underline',
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          &larr; back
        </motion.a>
      </div>
      <div className='about-wrapper'>
        <div className='about-bg-wrapper'>
          <h2>
            welcome to <span className='bold'>black garlic furniture</span>
          </h2>
          <p className='about-text'>
            we're pretty passionate about making furniture that not only
            brightens up your home but is good for the planet and it's people.
            inspired by aotearoa's natural beauty, our designs reflect a
            commitment to clean design, eco-conscious materials, and the diy
            spirit.
          </p>
          <div className='about-links-wrapper'>
            <Link to='/contact'>
              <motion.p
                className='bold about-links'
                whileHover={{
                  scale: 1.01,
                  textDecoration: 'underline',
                }}
                whileTap={{
                  scale: 0.99,
                }}
              >
                get in touch &rarr;
              </motion.p>
            </Link>
            <Link to='/shop'>
              <motion.p
                className='bold about-links'
                whileHover={{
                  scale: 1.01,
                  textDecoration: 'underline',
                }}
                whileTap={{
                  scale: 0.99,
                }}
              >
                view the shop &rarr;
              </motion.p>
            </Link>
          </div>
        </div>

        <div className='mtt-whole-wrapper'>
          <div className='mtt-topwrapper'>
            <p className='mtt-header bold'>meet the team</p>
            <div className='about-images-wrapper'>
              <div className='about-image'>
                <img className='img-1' src={aboutImage1} alt='' />
                <p className='about-img-name bold'>Jenna</p>
                <p className='about-img-name smaller-text'>design</p>
              </div>
              <div className='about-image'>
                <img className='img-2' src={aboutImage2} alt='' />
                <p className='about-img-name bold'>Graeme</p>
                <p className='about-img-name smaller-text'>marketing</p>
              </div>
              <div className='about-image'>
                <img className='img-3' src={aboutImage3} alt='' />
                <p className='about-img-name bold'>Miles</p>
                <p className='about-img-name smaller-text'>manufacturing</p>
              </div>
            </div>
          </div>
          <div className='mtt-wrapper'>
            <div className='person-wrapper'>
              <p className='person-name bold'>Jenna</p>
              <p className='person-bio'>
                Meet Jenna, the creative force behind our designs. with an eye
                for clean design and a passion for sustainability, Jenna crafts
                furniture that seamlessly blends form and function. her designs
                are inspired by the natural beauty of aotearoa, creating pieces
                that tell a story of elegance and green living.
              </p>
            </div>
            <div className='person-wrapper'>
              <p className='person-name bold'>Graeme</p>
              <p className='person-bio'>
                Graeme, our marketing maestro, brings the story of black garlic
                furniture to life. with a knack for storytelling and a
                commitment to ethical branding, Graeme ensures that our message
                of sustainability and style resonates with our audience. he
                believes that every piece has a tale, and he's here to share it
                with the world.
              </p>
            </div>
            <div className='person-wrapper'>
              <p className='person-name bold'>Miles</p>
              <p className='person-bio'>
                Miles is the hands behind the craft. as our manufacturer, he
                turns raw materials into works of art. with precision and
                dedication, Miles brings the designs to life, ensuring each
                piece meets our standards of quality and sustainability. his
                love for woodworking shines through in every carefully crafted
                detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
