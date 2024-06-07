// Create an API endpoint
app.get('/api', (req, res) => {
    res.send('API endpoint');
});

// Create an API endpoint using the React framework that accepts a JSON payload in a POST request
app.post('/api', (req, res) => {
    res.send('API endpoint');
}
);

//Add an event listen to the button to send a POST request to /generate endpoint and display response in a div with id "result"
// Path: .CartellaProvaJS/Prova.js
// Create an API endpoint
app.get('/api', (req, res) => {
    res.send('API endpoint');
});

// Create an API endpoint using the React framework that accepts a JSON payload in a POST request
app.post('/api', (req, res) => {
    res.send('API endpoint');
}
);

// Add an event listen to the button to send a POST request to /generate endpoint and display response in a div with id "result"
document.getElementById('generate').addEventListener('click', async () => {
    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: 'Hello World' })
    });
    const data = await response.json();
    document.getElementById('result').innerText = data.text;
});

//Create an API endpoint that accepts a JSON payload in a POST request and returns the same payload in the response
// Path: .CartellaProvaJS/Prova.js
// Create an API endpoint
app.get('/api', (req, res) => {
    res.send('API endpoint');
});

// Create an API endpoint using the React framework that accepts a JSON payload in a POST request
app.post('/api', (req, res) => {
    res.send('API endpoint');
}
);

// Add an event listen to the button to send a POST request to /generate endpoint and display response in a div with id "result"
document.getElementById('generate').addEventListener('click', async () => {
    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: 'Hello World' })
    });
    const data = await response.json();
    document.getElementById('result').innerText = data.text;
});

// Create an API endpoint that accepts a JSON payload in a POST request and returns the same payload in the response
app.post('/generate', (req, res) => {
    res.json(req.body);
});

//Create an API endpoint that accepts a JSON payload in a POST request and returns the same payload in the response
// Path: .CartellaProvaJS/Prova.js
// Create an API endpoint
app.get('/api', (req, res) => {
    res.send('API endpoint');
});