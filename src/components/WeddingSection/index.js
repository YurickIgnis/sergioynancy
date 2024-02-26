import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <span className="bismillah">xxxx اللَّهِ الرَّحْمَنِ الرَّحِيم</span> */}
              <h2 className="main-font main-font__wedding">Contrato de matrimonio y celebraciones de boda.</h2>
              <span className="sub-title sub-title__wedding">Si Dios quiere se llevará a cabo en:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="xxxxxx"
                time="08.00 WIB"
                date="xxxxxxx 2024"
                description="Jl. xxxxxxxxxx"
            />
            <WeddingInfoBox
              title="xxxxxxx"
              time="11.00 s/d 15.00 WIB"
              date="xxxxxx 2024"
              description="Jl. xxxx"
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
