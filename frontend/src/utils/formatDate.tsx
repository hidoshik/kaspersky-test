import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formatDate = (date: string) => {
  const newsDate = parseISO(date);
  const formattedDate = format(newsDate, "dd MMM yyyy", { locale: enUS });
  return formattedDate;
};
