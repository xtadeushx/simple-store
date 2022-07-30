import './emptyCart.css'

function EmptyCart() {
	return (
		<>
			<div className='container container--cart'>
				<div className='cart cart--empty'>
					<h2>
						Корзина пустая <span>😕</span>
					</h2>
					<p>
						Вероятней всего, вы не заказывали ещё товар.
						<br />
						Для того, чтобы заказать товар, перейди на главную страницу.
					</p>
					{/* <img src=//{emptyCart} alt='Empty cart' /> */}
					
					<a href='/' className='button__empty-cart'>
						<span>Вернуться назад</span>
					</a>
				</div>
			</div>
		</>
	);
}

export  {EmptyCart};