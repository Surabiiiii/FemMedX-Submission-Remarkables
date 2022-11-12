import React from 'react';
import { Link } from 'react-router-dom';
import style from './pinkheader.module.css';

const Pinkheader = () => {
	return (
		<div className={style.firstfold}>
			<div className={style.pink}>
				<section className={style.firstfoldwrap}>
					<div className={style.content}>
						<div className={style.heading} id='pinkheading'>
							Consultation at your doorstep
							<br />
							
						</div>
						<p className={style.desc} id='pinksub'>
							
						</p>
						<article className={style.cardstrip}>
							<div className={style.docimg}>
								
								
								
								<span
									className={style.eachimgcount}
									id='active'
									style={{
										transform: 'translateX(-30px)',
										zIndex: 1,
										marginLeft: '15px'
									}}
								>
									100% Private and Secure </span>
							</div>
						</article>
						{/* <a href="/doctor" className={style.consultnow}>
              Consult now
            </a> */}
						<Link className={style.consult_now} to='/'>
							Book your consultation now
						</Link>
					</div>
					<img
						className={style.banner}
						id='pinkbanner'
						src='https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=900&t=st=1668271431~exp=1668272031~hmac=39764000dbba14109537c34e365003f0698a03e0f56a52a36a43c728858aabc3 '
						alt=''
					/>
					<div className={style.add} id='add'>
						<img
							src='https://img.freepik.com/free-vector/woman-wearing-protective-face-mask-against-covid-19-virus-vector_53876-169024.jpg?w=740&t=st=1668273337~exp=1668273937~hmac=2279904dc3fa5ef9035544b179a299fb3b123099fbe4ed0012ddfdd52af154ee'
							alt='a'
							style={{ width: '20px', height: '20px', marginRight: '5px' }}
						/>
						<p>Anonymity</p>
						<img
							src='https://img.freepik.com/free-vector/illustration-people-with-technology_53876-26644.jpg?w=996&t=st=1668273385~exp=1668273985~hmac=887efcbc4120280e95a7f007e867236bb94dedb711e051ca1115086d1970dbd5'
							alt='p'
							style={{
								width: '20px',
								height: '20px',
								marginRight: '5px',
								marginLeft: '5px'
							}}
						/>
						<p>Safe and Secure</p>
						
						
					</div>
				</section>
			</div>
		</div>
	);
};

export default Pinkheader;
