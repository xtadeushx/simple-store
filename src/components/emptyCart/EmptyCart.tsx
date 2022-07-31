import './emptyCart.css'

function EmptyCart() {
	return (
		<>
			<div className='container container--cart'>
				<div className='cart cart--empty'>
					<h2>
						Корзина порожня <span>😕</span>
					</h2>
					<p>
					Найімовірніше, ви ще не замовляли товар.
						<br />
						Щоб замовити товар, перейди на головну сторінку.
					</p>
					{/* <img src=//{emptyCart} alt='Empty cart' /> */}
					
					<a href='/' className='button__empty-cart'>
						<span>Повернутись назад</span>
					</a>
				</div>
			</div>
		</>
	);
}

export  {EmptyCart};