import React, { Fragment } from 'react';
import { bool } from 'prop-types';

// import Bride from '@assets/images/p-arin.jpg';
// import Groom from '@assets/images/p-miftah.jpg';
import Bride from '@assets/images/blanco.jpg';
import Groom from '@assets/images/blanco.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Mayo, X X 2024';

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h2 className="main-font">Lorem</h2>
			  <h3 className="sub-title hs">{finalSubtitle}</h3>
			  <p className="info">
			  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
			  </p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
				<h3 className="main-font">Nancy</h3>
				<p className="parent-name parent-name__top">
				  xxxxx <br />& xxxxxx
				</p>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<h3 className="main-font">Sergio</h3>
				<p className="parent-name">
				  Putra Bapak Atang <br />& Ibu Manah
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
