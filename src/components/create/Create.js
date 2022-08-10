

 export const Create = ({addCarHandler}) => {
	const createOffer = (e) => {
		e.preventDefault();
		const carData = Object.fromEntries(new FormData(e.target));
		console.log(carData);
		addCarHandler(carData);
	}
    return (
        <section className="createPage">
            <div className="create_container">
	<div className="screen">
		<div className="screen__content">
			<form class="create" onSubmit={createOffer}>
            <div className="create__field">
					
					<input type="text" className="create__input" name='carModel' id='carModel' placeholder="Car Model"/>
			</div>
            <div className="create__field">
					
					<input type="number" className="create__input" name='price' id='price' placeholder="Price"/>
			</div>
                <div className="create__field">
					
					<input typeName="text" class="register__input" name='city' id='city' placeholder="City"/>
				</div>
				<div className="create__field">
					
					<input type="text" className="create__input" name='imgUrl' id='imgUrl' placeholder="Image URL"/>
			    </div>
				<div className="create__field">
					
					<textarea  className="create__input" name='desc' id='desc' placeholder="Additional information"></textarea>
			    </div>
				<button className="button create__submit">
					Create offer
				</button>				
			</form>
        
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </section>
    );
}

