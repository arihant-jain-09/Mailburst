import React from 'react'
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../../redux/token/token.actions';
const Payments = () => {
    const dispatch = useDispatch();
    return (
        <StripeCheckout 
        name="Emaily"
        description="5 for 5 email credits "
        amount={5*100}
        currency="INR"
        token={token=>dispatch(handleToken(token))}
        stripeKey="pk_test_51IEYd8KOecIy1LyGh4HL31MLl2Bj6I2DZP4cl5dONXGje65sSJbZeO0cyOIMT1stnUSWH6R1y7YxpoV1Urfpw1dn00SEmu6tgN"
        >
            <button className='btn'>Add Credits</button>
        </StripeCheckout>
    )
}

export default Payments
