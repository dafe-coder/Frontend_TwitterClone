import formatDistance from 'date-fns/formatDistance';
import Lang from 'date-fns/locale/en-US';

export const formatDate = (data: Date): string => {
	return formatDistance(data, new Date(), { locale: Lang });
};
