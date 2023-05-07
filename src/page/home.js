import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedIn.svg';
import nauka1 from '../assets/images/nauka1.png';

const HomePage = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="logo">
          <a href=".">WAVES IN NAUKA</a>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100083086223252&mibextid=ZbWKwL"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/9ka/?fbclid=IwAR202eBsVMEu2-3yhuyYC9I2mVy38MvemhUaUNZ1PLiB_3jH-iPLt7dkYU8"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="icon" />
          </a>
        </div>
      </div>
      <div className="content">
        <div className="title-holder">
          <h1>Our Website Is Coming Soon</h1>
          <p className="about-nauka">
            Waves in Nauka is a tech driven social enterprise which provides
            apprenticeships to rural youths.
          </p>
          <p>
            Stay tuned for more updates. Shoot us an email if you're curious.
          </p>
        </div>
        <a href="mailto:pasang.syangtan@wavesinnauka.com.np">
          <div className="cta">Send us an email</div>
        </a>
      </div>
      <div className="footer">
        <img src={nauka1} width={100} height={100} alt="Logo" />
      </div>
    </div>
  );
};

export default HomePage;
