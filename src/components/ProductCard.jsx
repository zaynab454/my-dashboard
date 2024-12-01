import { BiShoppingBag, BiCreditCard, BiSupport } from "react-icons/bi";

const products = [
    {
        name: 'Smartphone',
        price: '$299',
        icon: <BiShoppingBag />
    },
    {
        name: 'Carte Cadeau',
        price: '$50',
        icon: <BiCreditCard />
    },
    {
        name: 'Support Technique',
        price: '$15',
        icon: <BiSupport />
    }
];

const ProductCard = () => {
    return (
        <div className="card--container">
            {products.map((item, index) => (
               <div className="card" key={index}>
                 <div className="card--cover">{item.icon}</div>
                 <div className="card--title">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                 </div>
               </div>
            ))}
        </div>
    );
};

export default ProductCard;
