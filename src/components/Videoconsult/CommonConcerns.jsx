import { Link } from 'react-router-dom';
import styles from './CommonConcerns.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import Category from './Category';

const CommonProblems = ({ name, price, img }) => (
	<div className={styles.problem_card}>
		<img src={img} alt={name} className={styles.problem_card_img} />
		<h3 className={styles.problem_card_title}>{name}</h3>
		<h4 className={styles.problem_card_price}>
			<span className='rupees_symbol'>₹</span>
			{price}
		</h4>
		<Link className={styles.consult_link} to='/'>
			Book Appointment Now{' '}
			<svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M5.7212 3.12422C5.81457 3.1239 5.90683 3.14451 5.99119 3.18453C6.07555 3.22454 6.14987 3.28296 6.2087 3.35547L9.22745 7.10547C9.31938 7.2173 9.36963 7.35758 9.36963 7.50234C9.36963 7.64711 9.31938 7.78738 9.22745 7.89922L6.10245 11.6492C5.99636 11.7769 5.84392 11.8571 5.67865 11.8724C5.51339 11.8876 5.34883 11.8366 5.2212 11.7305C5.09356 11.6244 5.0133 11.4719 4.99806 11.3067C4.98282 11.1414 5.03386 10.9769 5.13995 10.8492L7.9337 7.49922L5.2337 4.14922C5.15727 4.05748 5.10872 3.94576 5.0938 3.8273C5.07887 3.70883 5.0982 3.58856 5.14948 3.48073C5.20077 3.3729 5.28187 3.28202 5.38319 3.21884C5.48451 3.15566 5.6018 3.12282 5.7212 3.12422Z'
					fill='#47CCF3'
				/>
			</svg>
		</Link>
	</div>
);

const CommonConcerns = () => {
	const problems = [
		
		{
			name: 'Vaginal infections?',
			price: 499,
			img: 'https://img.freepik.com/free-vector/female-reproductive-system-concept_52683-46097.jpg?w=900&t=st=1668251071~exp=1668251671~hmac=1cf6e434828faa4cadd43c7d11e1e64c175c160a1464ae557d114f85850d3efb '
		},
		{
			name: 'Menstrual Problems?',
			price: 499,
			img: 'https://img.freepik.com/free-vector/menstrual-period-item-doodle-vector-tax-woman-rights-concept_53876-126542.jpg?w=1060&t=st=1668250445~exp=1668251045~hmac=bf9fb7e70ba56d331488889dc62a8dc3601e7bddba8ff806ee9cd82d985317f3'
		},
		{ name: 'Health issues of child?', price: 499, img: 'https://img.freepik.com/free-vector/mom-taking-care-about-sick-child-girl-getting-cold-suffering-from-flu-lying-bed-with-sore-throat-fever-vector-illustration-childcare-motherhood-epidemic-concept_74855-13168.jpg?w=900&t=st=1668251204~exp=1668251804~hmac=1759ae6d11b36d8c373f4b7fb54056354301a3626b4f95488d02fbec27f68518 ' },
		,
		{
			name: 'Anxiety or Depression?',
			price: 499,
			img: 'https://img.freepik.com/free-vector/young-depressed-woman-sitting-sofa-holding-head_74855-6730.jpg?w=996&t=st=1668251116~exp=1668251716~hmac=e21d7fbfdfdcedd85d5b8c16852c6ec5cfd1fe6220097012927902cdf0760449'
		},
	
		{
			name: 'Skin problems?',
			price: 499,
			img: 'https://img.freepik.com/free-vector/diagram-showing-different-skin-conditions_1308-34167.jpg?w=900&t=st=1668251024~exp=1668251624~hmac=aa01d6870305f704050b072141a43c2dc0346a92295796eeb05b513d788390e0'
		},
		{
			name: 'Sexual Issues with partner?',
			price: 499,
			img: 'https://img.freepik.com/free-vector/divorce-concept-with-sad-people_23-2148594410.jpg?w=740&t=st=1668250934~exp=1668251534~hmac=d82f28c9167aa6cd152eb7f6095a5fd1524bce68c8f55088e6dbd435a848135d'
		}
		
		
	];

	const arr = problems.map((el) => <CommonProblems {...el} />);

	return (
		<Category heading='Day to Day Issues' description='Get answers to all your health issues now' type='Symptoms'>
			<SliderWrapper arr={arr} limit={3} />
		</Category>
	);
};

export default CommonConcerns;
