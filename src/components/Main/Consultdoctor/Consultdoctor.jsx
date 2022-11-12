import React from 'react';
import Section from '../../Section/Section';
import Wrapper from './doc';

const Consultdoctor = () => {
	return (
		<Section style={{ marginTop: '60px' }}>
			<Wrapper>
				<div className='content'>
					<div className='head'>
						<h2>
							Online Consulations With Specialists of Your choice
						</h2>
						<div style={{ marginTop: '5px', fontSize: '14px' }}>
							Online consultations with top Doctors in their fields
						</div>
						<button className='btn'>View All Specialities</button>
						<div id="consult_doc" style={{ marginTop: '20px' }}>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://img.freepik.com/free-vector/flat-design-menopause-illustration_23-2149375318.jpg?w=740&t=st=1668288215~exp=1668288815~hmac=e1d9adf75f5f4a50db1a7e76747d7f7a7452d27b6f60c7701930f44df8361723'
												alt='pregnancy'
											/>
										</span>
									</div>
									<div className='speciality'>Period doubts or Pregnancy</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://img.freepik.com/free-vector/stress-concept-illustration_114360-2021.jpg?w=740&t=st=1668294430~exp=1668295030~hmac=cc7a49e73603fcc7ef4869b06495681ff743c6fab831b56a55d03704871e6f58'
												alt='mental illnes'
											/>
										</span>
									</div>
									<div className='speciality'>Depression or anxiety</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://img.freepik.com/free-vector/flat-woman-face-with-skin-diseases-rashes-acne-dermatology-problems-dermatologist-cosmetology-doctor-with-magnifier-glass-examining-huge-female-head-with-facial-dermatitis-redness-pimples_88138-877.jpg?w=1060&t=st=1668288267~exp=1668288867~hmac=30b5c8dcc717bbf4e06305fdcb6fdabac96ebc6f5e93e74c9eba51bd4d66af93'
												alt='acne'
											/>
										</span>
									</div>
									<div className='speciality'>Acne, Pimple or Skin issues</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://img.freepik.com/free-vector/person-with-cold_23-2148472863.jpg?w=740&t=st=1668294460~exp=1668295060~hmac=48e500b7b1ff581795dfbc79dde2ac35b3845b434d52693a66b55996fc2c17d1'
												alt='cold'
											/>
										</span>
									</div>
									<div className='speciality'>Cough, Fever or Cold</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://img.freepik.com/free-vector/hand-drawn-flat-design-infertility-illustration_23-2149383983.jpg?w=740&t=st=1668288357~exp=1668288957~hmac=8eabd0fd98705d00ffec4bfc21b33987ea2364d29d9ffad16ae393c5e750894d'
												alt=''
											/>
										</span>
									</div>
									<div className='speciality'>Performance issues in bed</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							
							
							<div style={{ verticalAlign: 'top', marginRight: '10px', display: 'inline-block' }}>
								<div className='speciality_card'>
									<div style={{ width: '120px', height: '120px' }}>
										<span>
											<img
												src='https://img.freepik.com/free-vector/person-with-cold_23-2148469662.jpg?w=740&t=st=1668294498~exp=1668295098~hmac=105159cc067ea9d69b5c8179ea10c0513155069372a82e9e0672f5e5f1ccb1a6'
												alt='child'
											/>
										</span>
									</div>
									<div className='speciality'>Child not feeling well</div>
									<div className='consult_now'> Consult now</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};
export default Consultdoctor;
