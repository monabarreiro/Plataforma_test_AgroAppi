const express = require ('express');
const mercadopago = require('mercadopago');

// Initialize Express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set MercadoPago credentials
mercadopago.configurations.setAccessToken('YOUR_ACCESS_TOKEN');

app.post('/process_payment', async (req, res) => {
  try {
    const paymentData = {
      transaction_amount: req.body.transaction_amount,
      token: req.body.token,
      description: req.body.description,
      installments: req.body.installments,
      payment_method_id: req.body.payment_method_id,
      payer: {
      email: req.body.email,
      },
    };

    const response = await mercadopago.payment.save(paymentData);

    res.status(200).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});