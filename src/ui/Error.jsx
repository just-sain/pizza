import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Что то пошло не так 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Вернуться назад</LinkButton>
    </div>
  );
}

export default Error;
