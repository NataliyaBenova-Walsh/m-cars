import { CatalogItem} from './CatalogItem';



export const Catalog = ({cars}) => {
    
    return (
    <div id="featured-content">
        

        {cars.length > 0 
            ? cars.map(x => <CatalogItem key={x._objectId} car={x}/>)
            : <h3 className='noCars'>No car offers yet</h3>}
		
		
	</div>

    );
}