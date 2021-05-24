
function Product(props){
    return (
        <article className={"product"}>
            <span className={"product-span"}>{props.span} </span>
            <img src={props.image} alt={props.title}/>
            <p className={"product-name"}>{props.name}</p>
            <h4 className={"product-price"}>{props.price}</h4>
        </article>
    );
}

export default Product