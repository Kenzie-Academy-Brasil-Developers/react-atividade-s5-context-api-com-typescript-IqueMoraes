
interface ProductProps{
    image: string;
    description: string;
    title:string;
    price: number;
    buttonText: string;
    buttonFunction: any;

}

export const Product = ({image, description, title, price, buttonText, buttonFunction }: ProductProps) => {

    return(
        <div style={{"marginBottom":"60px", "width":"250px"}}>
            <img src={image} alt={description} style={{"height":"120px"}}/>
            <h2 style={{"fontSize":"18px"}}>{title}</h2>
            <h2 style={{"fontSize":"18px"}}>R${price}</h2>
            <button onClick={buttonFunction}>{buttonText}</button>
        </div>
    )
}