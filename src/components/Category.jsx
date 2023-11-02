import '../css/Category.css';
import TopBanner from './TopBanner';
import ProductCard from './ProductCard';

const Category = () => {
  return (
    <>
      <TopBanner content={{ title: 'storage' }} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          padding: '0 1rem',
        }}
      >
        <ProductCard
          content={{
            name: 'Nora',
            desc: 'Side Table',
            price: '740.00',
            material: 'Ash',
            bgc: 'var(--primary-dark-green)',
            textcol: 'var(--tertiary-blue)',
            splineURL:
              'https://prod.spline.design/zUrOMBHorzun8hob/scene.splinecode',
          }}
        />
        <ProductCard
          content={{
            name: 'Nora',
            desc: 'Side Table',
            price: '890.00',
            material: 'Walnut',
            bgc: 'var(--primary-blue-green)',
            textcol: 'var(--tertiary-green)',
          }}
        />
        <ProductCard
          content={{
            name: 'Sofia',
            desc: 'Night Stand',
            price: '1020.00',
            material: 'Walnut',
            bgc: 'var(--secondary-blue)',
            textcol: 'var(--tertiary-green)',
          }}
        />
        <ProductCard
          content={{
            name: 'Sofia',
            desc: 'Night Stand',
            price: '940.00',
            material: 'Ash',
            bgc: 'var(--primary-blue)',
            textcol: 'var(--tertiary-pink)',
          }}
        />
        <ProductCard
          content={{
            name: 'Felix',
            desc: 'Record Stand',
            price: '2100.00',
            material: 'Ash',
            bgc: 'var(--primary-light-green)',
            textcol: 'var(--primary-blue)',
          }}
        />
        <ProductCard
          content={{
            name: 'Felix',
            desc: 'Record Stand',
            price: '2290.00',
            material: 'Walnut',
            bgc: 'var(--secondary-light-green-solid)',
            textcol: 'var(--primary-blue)',
          }}
        />
      </div>
    </>
  );
};

export default Category;
