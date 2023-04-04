import { plantList } from '../datas/plantList'
function ShoppingList(){
    return(
        <div>
            <ul>
                {plantList.map((plant)=>(
                    <li key={plant.id}>{plant.name}{plant.isSpecialOffer ? <span>🔥</span> : <span>👎</span>}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((categ)=>(
                    <li key={categ.id}>{categ.category}</li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList;