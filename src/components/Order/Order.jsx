import React from "react";
import './Order.css';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            country: '',
            city: '',
            street: '',
            house: '',
            creditCard: '',
        };
        
    }   

    onBuyBtnClick = (e) => {
        e.preventDefault();
        
        let orderForm = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            country: this.state.country,
            city: this.state.city,
            street: this.state.street,
            house: this.state.house,
            creditCard: this.state.creditCard,
            order: this.props.goodsInCart,
        }
        console.log(orderForm);
        
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            country: '',
            city: '',
            street: '',
            house: '',
            creditCard: '',
        });
    }

    render() {
        return (
            <div className="order">
                <h1>Ordering</h1>
                <form className="order__form" onSubmit={this.onBuyBtnClick}>
                    <div className="order__data">
                        <div className="first_name order__field">
                            <div className="form__label">
                                <label htmlFor="first_name">First name: </label>
                            </div>
                            <div>
                                <input type="text" id='first_name' placeholder='First name' onChange={(e) => this.setState({ firstName: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="last_name order__field">
                            <div className="form__label">
                                <label htmlFor="last_name">Last name: </label>
                            </div>
                            <div>
                                <input type="text" id="last_name" placeholder='Last name' onChange={(e) => this.setState({ lastName: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="phone_number order__field">
                            <div className="form__label">
                                <label htmlFor="phone_number">Phone number: </label>
                            </div>
                            <div>
                                <input type="tel" id="phone_number" placeholder='Phone number' onChange={(e) => this.setState({ phoneNumber: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="order_country order__field">
                            <div className="form__label">
                                <label htmlFor="order_country">Country: </label>
                            </div>
                            <div>
                                <input type="text" id="order_country" placeholder='Your country' onChange={(e) => this.setState({ country: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="order_city order__field">
                            <div className="form__label">
                                <label htmlFor="order_city">City: </label>
                            </div>
                            <div>
                                <input type="text" id="order_city" placeholder='Your city' onChange={(e) => this.setState({ city: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="order_street order__field">
                            <div className="form__label">
                                <label htmlFor="order_street">Street: </label>
                            </div>
                            <div>
                                <input type="text" id="order_street" placeholder='Your street' onChange={(e) => this.setState({ street: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="order_house order__field">
                            <div className="form__label">
                                <label htmlFor="order_house">House number: </label>
                            </div>
                            <div>
                                <input type="text" id="order_house" placeholder='Your house number' onChange={(e) => this.setState({ house: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="credit_card order__field">
                            <div className="form__label">
                                <label htmlFor="credit_card">Credit card number: </label>
                            </div>
                            <div>
                                <input type="text" id="credit_card" placeholder='Number of your credit card' onChange={(e) => this.setState({ creditCard: e.target.value })} required />
                            </div>
                        </div>
    
                        <div className="order__field">
                            Total: {this.props.goodsInCart.map(a => a.price).reduce((a, b) => a + b, 0)}$
                        </div> 
    
                        <div>
                            <button className="order__btn">Buy</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Order;
