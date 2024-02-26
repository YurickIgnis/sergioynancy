import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import Peta from '@assets/images/peta.jpeg';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">xxxxxxx</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>xxxx, xxxx</strong>
                </a>{' '}
                <br />
                Jl. xxxx RT/RW 05/07
                xxxxx.xxxxx
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://maps.google.com/maps?q=Klinik%20Bintari%20Medika&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Sergio & nancy"
              ></iframe>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <img
                  src={Peta}
                  class="center"
                  display="block"
                  margin-left="auto"
                  margin-right="auto"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  aria-hidden="false"
                  tabIndex="0"
                  title="Peta Lokasi"
                  alt="peta-lokasi-cangkring"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
