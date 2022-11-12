import BannerWrapper from './BannerWrapper';
import styles from './Banner.module.css';
const Banner = ({ bannerImg }) => {
	return (
		<BannerWrapper id="banner_wrapper">
			<h1>FemMedX</h1>
			<img src='https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1783.jpg?w=900&t=st=1668289931~exp=1668290531~hmac=5ad03dfd75aaa46800ad980ec75f9159fc06420a5a0af1ec3c9fd190e7f2d2d5  ' alt='FemMedX' />
		</BannerWrapper>
	);
};

export default Banner;
