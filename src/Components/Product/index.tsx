interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface ProductProps{
    item: Item,
    buttonText: string;
    buttonFunction: any;

}

export const Product = ({item, buttonText, buttonFunction }: ProductProps) => {

    return(
        <div style={{"marginBottom":"60px", "width":"250px"}}>
            <img src={item.image} alt={item.description} style={{"height":"120px"}}/>
            <h2 style={{"fontSize":"18px"}}>{item.title}</h2>
            <h2 style={{"fontSize":"18px"}}>R${item.price}</h2>
            <button onClick={()=>buttonFunction(item)}>{buttonText}</button>
        </div>
    )
}