function Cart(){
    const prixMonstera = 8;
    const prixLiere = 10;
    const prixBouquet = 15;
    const totalPanier = prixMonstera + prixLiere + prixBouquet; 
    return (
        <div className="lmj-cart">
            <h3>Panier</h3>
            <ul>
                <li>un monstera {prixMonstera}</li>
                <li>un liere {prixLiere}</li>
                <li>un bouquet de fleur{prixBouquet}</li>
            </ul>
            <p>le total du panier est de {totalPanier}</p>
       </div>
    )
}
export default Cart;