

import express from 'express';
import cors from 'cors';
import mercadopago from 'mercadopago'; // Correct import

const app = express();

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.accessToken = "TEST-3266920673300855-101518-b064a0c714d8ea9b0eaaf1d4a1bc1430-193433458";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client/html-js"));
app.use(cors());

app.get("/", function (req, res) {
    res.status(200).sendFile("index.html");
});

app.post("/create_preference", (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            }
        ],
        back_urls: {
            "success": "http://localhost:8080/feedback",
            "failure": "http://localhost:8080/feedback",
            "pending": "http://localhost:8080/feedback"
        },
        auto_return: "approved",
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
            });
        }).catch(function (error) {
            console.log(error);
        });
});

app.get('/feedback', function (req, res) {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
});

app.listen(8080, () => {
    console.log("The server is now running on Port 8080");
});