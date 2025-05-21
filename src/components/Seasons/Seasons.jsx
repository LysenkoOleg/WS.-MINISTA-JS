import './Seasons.scss';
import AccordionGroup from '@/components/AccordionGroup';
import seasonItems from '@/components/Seasons/seasonItems';
import Accordion from '@/components/Accordion';

const Seasons = (props) => {
	
	return (
		<AccordionGroup
			mode='dark'
			isOrderedList={false}
		>
			{seasonItems.map(({ title, subtitle, episodes }, index) => (
				<Accordion
					title={title}
					titleLevelClassName='h4'
					subtitle={subtitle}
					id={`season-${index}`}
					name='seasons'
					isOpen={index === 0}
					key={index}
					isArrowButton
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci, aliquam consequatur cumque dolorem et hic illum ipsam iure labore laborum nam, nisi numquam officiis perspiciatis quis reiciendis sapiente suscipit?
				</Accordion>
			))}
		</AccordionGroup>
	);
};

export default Seasons;