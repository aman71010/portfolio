import './product.css'

export default function Product({link, img}) {
    return (
        <div className="product">
            <div className="product-browser">
                <div className="circle" style={{backgroundColor: "#FF4112"}}></div>
                <div className="circle" style={{backgroundColor: "#FFF347"}}></div>
                <div className="circle" style={{backgroundColor: "#50FC23"}}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img className="p-img" src={img} alt="" />
            </a>
        </div>
    )
}
