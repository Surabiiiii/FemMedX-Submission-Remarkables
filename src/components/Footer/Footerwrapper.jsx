import React from 'react';
import Section from '../Section/Section';
import Footer from './Footer';

const Footerwrapper = () => {
	return (
		<Section
			id="footer_section"
			style={{
				// minWidth: '1200px',
				backgroundColor: '#ffff',
				padding: ' 48px 0',
				color: '#fff',
				fontSize: '14px'
			}}
		>
			<div
				id="footer_top"
				style={{
					// width: '1180px',
					maxWidth: "100rem",
					margin: 'auto'
				}}
			>
				<Footer>
					
					
					
					
					
					
				</Footer>
			</div>
			<div id="footer_img_div" style={{ textAlign: 'center' }}>
				<span>
					<img
						src='logo.jpg'
						alt='fedmedx_logo'
						style={{ margin: '28px 0px', border: '0px', maxWidth: '210px', maxHeight: '48px' }}
					/>
				</span>
				
			</div>
		</Section>
	);
};

export default Footerwrapper;
