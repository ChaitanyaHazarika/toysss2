const api_key = 'https://api.razorpay.com/v1/orders'

fetch(api_key, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
        amount: 1,
        curency: "INR",
        receipt: "receipt#1"
    })
}).then(res => {
    return res.json()
}).then(data => console.log(data))