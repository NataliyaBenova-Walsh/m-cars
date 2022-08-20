import { CatalogItem} from './CatalogItem';



export const Catalog = ({cars, addCarHandler}) => {

    return (
    <div id="featured-content">
        

        {cars.length > 0 
            ? cars.map(x => <CatalogItem car={x}  key={x.id} />)
            : <h3 className='noCars'>No car offers yet</h3>}
		
		
	</div>

    );
}