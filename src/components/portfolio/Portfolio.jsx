import './portfolio.css'
import { products } from '../../data'
import Product from '../product/Product'

export default function Portfolio() {

    return (
        <div className="portfolio" id="portfolio">
            <div className="p-texts">
                <h1 className="p-header">Portfolio</h1>
            </div>
            <div className="p-lists">
               { products.map((item) => (
                    <Product 
                        key = {item.id}
                        link = {item.link}
                        img = {item.img}
                    />
                ))}

            </div>
        </div>
    )
}
