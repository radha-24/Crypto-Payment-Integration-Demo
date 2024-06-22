// Import required modules
const express = require('express');
const cors = require('cors'); // Import cors module

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "public" directory (if needed)
app.use(express.static('public'));

// Define the port number
const PORT = 3000;

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Function to generate a random transaction ID
function generateTransactionId() {
    return Math.floor(Math.random() * 1000000).toString();
}

// Route handler for creating transaction
app.post('/create-transaction', (req, res) => {
    try {
        // Generate a transaction ID
        const transactionId = generateTransactionId();
        
        // Send back a JSON response with the transaction ID
        res.json({ transactionId });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Failed to create transaction' });
    }
});

