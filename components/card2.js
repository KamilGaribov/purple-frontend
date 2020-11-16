import Link from "next/link";

function Card(props) {
  const { item, addCart, pageType } = props;
  if (item.image) {
    var src = item.image;
  } else {
    var src = "img/cake-feature/c-feature-9.jpg";
  }
  return (
    <div className="col-lg-3 col-md-4 col-6" id="item-card">
      <div className="cake_feature_item">
        <div className="cake_img">
          <Link href={`/${pageType}/[id]`} as={`/${pageType}/${item.id}`}>
            <img src={src} alt="" />
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
