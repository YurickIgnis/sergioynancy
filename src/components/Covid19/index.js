import React from 'react';

import IconMask from './assets/face-mask.png';
import IconSocialDistancing from './assets/social-distancing.png';
import IconGuest from './assets/parents.png';
import IconClock from './assets/clock.png';
import IconQRcode from './assets/qr.png';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Xxxxxxx</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <div className="col-md-12">
            <SectionBox icon={IconMask} text="xxxxxxxxxx" />
            <SectionBox icon={IconSocialDistancing} text="xxxxxxxxxx" />
            <SectionBox icon={IconGuest} text="xxxxxxxxxx" />
            <SectionBox icon={IconQRcode} text="xxxxxxxxxx" />
            <SectionBox icon={IconClock} text="xxxxxxxxxxn." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
