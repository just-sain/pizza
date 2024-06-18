import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
      Ваша корзина все еще пуста. Начните добавлять пиццы :)
      </p>
    </div>
  );
}

export default EmptyCart;
