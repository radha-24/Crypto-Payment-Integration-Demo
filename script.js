document.getElementById('create-transaction-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/create-transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 100 }) // Example amount
        });
        const data = await response.json();
        console.log('Transaction created:', data.transactionId);
        // Display transaction ID or handle further processing here
    } catch (error) {
        console.error('Error creating transaction:', error);
    }
});
