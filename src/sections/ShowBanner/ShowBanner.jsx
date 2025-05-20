import './ShowBanner.scss';
import MovieBannerCard from '@/components/MovieBannerCard';
import showMovieBannerStore from '@/sections/ShowBanner/store/Show--MovieBanner';

const ShowBanner = () => {
	const titleId = 'show-banner-title'
	
	return (
		<section
			className='container'
			aria-labelledby={titleId}
		>
			<MovieBannerCard
				{...showMovieBannerStore}
			/>
		</section>
	);
};

export default ShowBanner;