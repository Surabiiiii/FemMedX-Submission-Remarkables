import Section from '../../Section/Section';
import Cards from './Cards';
import Card from './Card';

const CardsWrapper = () => {
	const info = [
		{
			title: 'Secure Video Consultation',
			desc: 'No Personal Information Required',
			img:
				'https://img.freepik.com/free-vector/video-calling-with-therapist-concept_23-2148525803.jpg?w=740&t=st=1668287191~exp=1668287791~hmac=6c3e661b56a31ad7403ee3914d957cab8fb9093bbc62da5a63cbcc852a7fb044',
			bg: '#afcfed'
		},
		{
			title: 'Find Trustworthy Doctors Nearby ',
			desc: 'Confirmed Appointments',
			img: 'https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg?w=1060&t=st=1668287281~exp=1668287881~hmac=3ab70ae3e3051481e100d282b9e6d97ad9ff567b8eecac49c09a33aa48c275c5',
			bg: '#98cbd6'
		},
		
		{
			title: 'Pathology Labs Near You',
			desc: 'Safe Labs Around You',
			img: 'https://img.freepik.com/free-vector/isometric-scientific-laboratory-equipment-with-microscope-tests-dna-microbiology-biotechnology-other-different-elements-illustra_596401-552.jpg?w=1060&t=st=1668287716~exp=1668288316~hmac=add207013a8b0a2a188534b63884172e8ec80d4145f3bb62f73bf0677d977848',
			bg: '#a2cae7'
		},
		{
			title: 'Surgery Centres',
			desc: 'Safe and trusted surgery centers',
			img: 'https://img.freepik.com/free-vector/surgeons-team-surrounding-patient-operation-table-flat-vector-illustration-cartoon-medical-workers-preparing-surgery-medicine-technology-concept_74855-8596.jpg?w=1060&t=st=1668287918~exp=1668288518~hmac=4af388f378d8825c9623e111e52d4f14447a1fb76c8f2681bc87252d3bdd2677',
			bg: '#d5d8fc'
		}
	];

	return (
		<Section className='mt-60'>
			<Cards id="cards_content" className='content'>
				{info.map(({ title, desc, img, bg }, indx) => (
					<Card bg={bg} key={title} className={`Card`}>
						<div className='img-wrapper'>
							<img className={`img-${indx}`} src={img} alt={title} /> 
						</div>
						<div className='info'>
							<h3>{title}</h3>
							<p>{desc}</p>
						</div>
					</Card>
				))}
			</Cards>
		</Section>
	);
};

export default CardsWrapper;
