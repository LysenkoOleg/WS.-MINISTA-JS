import MovieBanner from '@/sections/MovieBanner';
import MovieDetails from '@/sections/MovieDetails';

export const metadata = {
	title: 'MovieBanner - Kantara'
}

export default function () {
	return (
		<>
			<MovieBanner/>
			<MovieDetails/>
		</>
	)
}