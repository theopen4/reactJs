import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
const quantityLabel = {
	1: 'peu',
	2:'moderement',
	3: 'beaucoup'
}
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (<img src={Sun} alt="sun-icon"/>
	): (<img src={Water} alt="Water-icon"/>)

	return (
		<div onClick={()=>alert(`cet plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumiere': 'd arrosage'}}`)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale