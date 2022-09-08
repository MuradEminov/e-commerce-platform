import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'JAckets',
    },
    {
      id: 3,
      title: 'Sneaker',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ title, id }) => (
        <div className='category-container' key={id}>
          <div className='background-image'></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <h2>Shop Now</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
