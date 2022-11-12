import React, { useContext, useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import axios from 'axios';
import SuggestionListItem from './SuggestionListItem';
import { AuthContext } from '../../Contexts/AuthContextProvider';

export default function Searchbar() {
	const { location, keyword, handleLocation, handleKeyword } = useContext(AuthContext);
	const [ showPlaces, setShowPlaces ] = useState(false);
	const [ showSpeciality, setShowSpeciality ] = useState(false);

	const [ suggestionList, setSuggestionList ] = useState([]);

	useEffect(
		() => {
			getData();
		},
		[ showSpeciality, showPlaces ]
	);

	const handleQuery = (type, value) => {
		if (type === 'location') handleLocation(value);
		else handleKeyword(value);
	};

	const getData = async () => {
		if (!showPlaces && !showSpeciality) return;
		const endpoint = showPlaces ? 'place' : 'speciality';
		const { data } = await axios.get(`${process.env.REACT_APP_DATABASE}/${endpoint}`);
		setSuggestionList(data);
	};

	const showSuggestion = (type) => {
		if (type === 'places') {
			if (showPlaces === false) {
				setShowSpeciality(false);
			}
			setShowPlaces(!showPlaces);
		} else {
			if (showSpeciality === false) {
				setShowPlaces(false);
			}
			setShowSpeciality(!showSpeciality);
		}
	};

	return (
		<div id="searchbar_wrapper" className={styles.searchBarWrapper}>
			<div className={styles.searchBarContainer}>
				
				<div className={styles.searchBarKeyword} onClick={() => showSuggestion('speciality')}>
					<div className={styles.searchbox_wrapper}>
						<span className={styles.searchbox_icon}>
							<svg
								width='19'
								height='21'
								viewBox='0 0 19 21'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g opacity='0.6'>
									<path
										d='M16.7364 17.2594L12.159 12.2539C12.8693 11.2497 13.2536 10.0219 13.2536 8.73052C13.2536 7.18472 12.7019 5.7353 11.7043 4.64245C10.7067 3.5496 9.3777 2.94824 7.96589 2.94824C6.55409 2.94824 5.22512 3.55153 4.22751 4.64245C3.22814 5.73337 2.67822 7.18472 2.67822 8.73052C2.67822 10.2744 3.2299 11.7277 4.22751 12.8186C5.22512 13.9114 6.55232 14.5128 7.96589 14.5128C9.14681 14.5128 10.2678 14.0926 11.1861 13.3178L15.7634 18.3214C15.7769 18.3361 15.7928 18.3477 15.8103 18.3557C15.8279 18.3636 15.8467 18.3677 15.8657 18.3677C15.8847 18.3677 15.9035 18.3636 15.921 18.3557C15.9385 18.3477 15.9545 18.3361 15.9679 18.3214L16.7364 17.483C16.7498 17.4683 16.7605 17.4509 16.7677 17.4317C16.775 17.4125 16.7787 17.3919 16.7787 17.3712C16.7787 17.3504 16.775 17.3298 16.7677 17.3107C16.7605 17.2915 16.7498 17.2741 16.7364 17.2594ZM10.7578 11.7836C10.0105 12.5989 9.0199 13.048 7.96589 13.048C6.91188 13.048 5.92133 12.5989 5.174 11.7836C4.42844 10.9663 4.01777 9.88312 4.01777 8.73052C4.01777 7.57792 4.42844 6.49278 5.174 5.67748C5.92133 4.86218 6.91188 4.41309 7.96589 4.41309C9.0199 4.41309 10.0122 4.86025 10.7578 5.67748C11.5033 6.49471 11.914 7.57792 11.914 8.73052C11.914 9.88312 11.5033 10.9683 10.7578 11.7836Z'
										fill='#737376'
									/>
								</g>
							</svg>
						</span>
						<input
							value={keyword}
							className={styles.searchbox}
							type='text'
							name='searchbox_keyword'
							id={styles.searchbox_keyword}
							placeholder={keyword ? keyword : 'Search Specialists for your Symptoms'}
						/>
					</div>
					{showSpeciality ? (
						<SuggestionListItem handleQuery={handleQuery} list={suggestionList} type='speciality' />
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}
