import getIdFromTitle from '@/utils/getIdFromTitle';

const getTabsElementIdsFromTitle = (title) => {
	const titleFormatted = getIdFromTitle(title)
	
	return {
		buttonId: `${titleFormatted}-tab`,
		contentId: `${titleFormatted}-tabpanel`
	}
}

export default getTabsElementIdsFromTitle;