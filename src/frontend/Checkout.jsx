import { MercadoPagoConfig, Preference } from 'mercadopago';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-5fe51784-83ee-4dd4-b6d8-24c054cb9966');

const client = new MercadoPagoConfig({ accessToken: 
    'TEST-3266920673300855-101518-b064a0c714d8ea9b0eaaf1d4a1bc1430-193433458' });
    const preference = new Preference(client);

    const body = {
      items: [
        {
          id: '1234',
          title: 'Dummy Title',
          description: 'Dummy description',
          picture_url: 'http://www.myapp.com/myimage.jpg',
          category_id: 'car_electronics',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: 10,
        },
      ],
      marketplace_fee: 0,
      payer: {
        name: 'Test',
        surname: 'User',
        email: 'your_test_email@example.com',
        phone: {
          area_code: '11',
          number: '4444-4444',
        },
        identification: {
          type: 'CPF',
          number: '19119119100',
        },
        address: {
          zip_code: '06233200',
          street_name: 'Street',
          street_number: 123,
        },
      },
      back_urls: {
        success: 'http://test.com/success',
        failure: 'http://test.com/failure',
        pending: 'http://test.com/pending',
      },
      differential_pricing: {
        id: 1,
      },
      expires: false,
      additional_info: 'Discount: 12.00',
      auto_return: 'all',
      binary_mode: true,
      external_reference: '1643827245',
      marketplace: 'marketplace',
      notification_url: 'http://notificationurl.com',
      operation_type: 'regular_payment',
      payment_methods: {
        default_payment_method_id: 'master',
        excluded_payment_types: [
          {
            id: 'ticket',
          },
        ],
        excluded_payment_methods: [
          {
            id: '',
          },
        ],
        installments: 5,
        default_installments: 1,
      },
      shipments: {
        mode: 'custom',
        local_pickup: false,
        default_shipping_method: null,
        free_methods: [
          {
            id: 1,
          },
        ],
        cost: 10,
        free_shipping: false,
        dimensions: '10x10x20,500',
        receiver_address: {
          zip_code: '06000000',
          street_number: 123,
          street_name: 'Street',
          floor: '12',
          apartment: '120A',
        },
      },
      statement_descriptor: 'Test Store',
    };
    
    const response = await preference.create({ body })
      .then(console.log).catch(console.log);
   

export const Checkout =()=>{
    
     
    return (
        <div>
        <div id="paymentBrick_container">

        </div>
        <div id="wallet_container"></div>

<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} 
customization={{ texts:{ valueProp: 'smart_option'}}} />

        </div>

       
    )
}