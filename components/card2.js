import Link from "next/link";
import Image from 'next/image';

const originalError = console.error;

console.error = (...args) => {
  if (/Warning.*Function components cannot be given refs/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};


function Card(props) {
  const { item, addCart, pageType } = props;
  if (item.image) {
    var src = item.image;
  } else {
    var src = "/img/cake-feature/c-feature-9.jpg";
  }
  return (
    <div className="col-lg-3 col-md-4 col-6" id="item-card">
      <div className="cake_feature_item">
        <div className="cake_img">
          <Link href={`/${pageType}/[id]`} as={`/${pageType}/${item.id}`}>
          <Image src={src} alt={item.name} width={500} height={500}/>
          </Link>
        </div>
        <div className="cake_text">
          {item.discount ? (
            <h4 className="cake_discount">
              {item.discount}
              <span>{item.price}</span>
            </h4>
          ) : (
            <h4>{item.price}</h4>
          )}
          <h3>{item.name}</h3>
          <a
            className="pest_btn"
            onClick={() => {
              addCart(item, pageType);
            }}
          >
            səbətə elave et
          </a>
        </div>
      </div>
      <span id="item-type">
        {item.category ? item.category.name : null}
      </span>
    </div>
  );
}

export default Card;
