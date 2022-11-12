import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import Section from '../Section/Section';
import Navbar from './Navbar';
import style from './Navbar.module.css';

const Navbarwrapper = () => {
	const { user, token } = useContext(AuthContext);
	const [ sidebarOpen, setSidebarOpen ] = useState(false);
	const [ state, setState ] = useState(false);

	const handleClick = () => {
		if (state) {
			setState(false);
		} else {
			setState(true);
		}
	};

	const handleSidebarOpen = () => {
		setSidebarOpen(!sidebarOpen);
	};

	const { pathname } = useLocation();

	return (
		<Section>
			<Navbar fixed={pathname === '/doctors' ? true : false}>
				<div className='nav'>
					<input type='checkbox' checked={sidebarOpen} name='hamburger_menu' id='hamburger_icon' />
					<div className='mobile_list'>
						<label onClick={() => setSidebarOpen(false)} htmlFor='hamburger_icon' className='close_icon'>
							<i className='ion-close-round' />
						</label>
						<ul>
							<li>
								<Link onClick={() => setSidebarOpen(false)} to='/doctors'>
									Our Experts
								</Link>
							</li>
							<li>
								<Link onClick={() => setSidebarOpen(false)} to='/video-consult'>
									Online Consultations
								</Link>
							</li>
							
							
						</ul>
					</div>
					<label onClick={() => setSidebarOpen(true)} htmlFor='hamburger_icon' className='hamburger_menu'>
						<i className='ion-navicon-round' />
					</label>
					<div className='wrapper'>
						<div className='nav-left'>
							<Link
								to='/'
								style={{
									lineHeight: '27px'
								}}
							>
								<img
									src='logo.jpg'
									alt='FemMedXLogo'
									style={{
										maxWidth: '108px',
										maxHeight: '25px'
									}}
								/>{' '}
							</Link>{' '}
						</div>{' '}
						<div id='nav_mid' className='nav-mid'>
							<Link to='/doctors' className={`prod ${pathname === '/doctors' ? 'active' : ''}`}>
								<div className='prod-title'> Our Experts </div>{' '}
								<div className='prod-sub'> Book Online Consultation </div>{' '}
							</Link>{' '}
							<Link
								to='video-consult'
								className={`prod ${pathname === '/video-consult' ? 'active' : ''}`}
							>
								<div className='prod-title'> Online Consultations </div>{' '}
								<div className='prod-sub'> Safe and Secure </div>{' '}
							</Link>{' '}
							
						</div>{' '}
						<div
							style={{
								float: 'right',
								padding: '20px 0 19px',
								display: 'inline-block',
								height: '100%',
								verticalAlign: 'top',
								textAlign: 'right'
							}}
						>
							
							<div
								style={{
									position: 'relative',
									cursor: 'pointer',
									lineHeight: '35px',
									display: 'inline-block',
									marginRight: '15px'
								}}
							>
								
							</div>
							{token ? (
								<div
									style={{
										position: 'relative',
										cursor: 'pointer',
										lineHeight: '35px',
										display: 'inline-block',
										marginRight: '15px'
									}}
								>
									<span className={style.userInfo}>{user.name} </span>{' '}
									<span
										style={{
											fontSize: '15px',
											lineHeight: '30px',
											verticalAlign: 'middle',
											display: 'inline-block',
											padding: '0 1px',
											cursor: 'pointer'
										}}
									>
										<i className='fas fa-chevron-down' />
									</span>{' '}
								</div>
							) : (
								<div
									style={{
										marginRight: 0,
										display: 'inline-block'
									}}
								>
									<span>
										<Link className='navbar_login' to='/'>
											Login / Signup{' '}
										</Link>{' '}
									</span>{' '}
								</div>
							)}{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</Navbar>{' '}
		</Section>
	);
};

export default Navbarwrapper;
