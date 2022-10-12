import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <Button type='inverted'>Add to card</Button>
    </div>
  </div>;
};

export default ProductCard;
