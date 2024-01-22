import dayjs from 'dayjs';
import 'dayjs/locale/th';

const dayjsMiddleware = () => (next: any) => (action: any) => {
  const result = next(action);
  if (action.type === 'language/setLanguage') {
    dayjs.locale(action.payload);
  }
  return result;
};

export default dayjsMiddleware;
