const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/',(req,res)=>{
  res.send("Hello");
})

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    const user_id = "Himanshu_2110990614";  
    const email = "himanshu0614.be21@chitkara.edu.in";  
    const roll_number = "2110990614";
    const even_numbers = data.filter(num => num % 2 === 0);
    const odd_numbers = data.filter(num => num % 2 !== 0);
    const alphabets = data.filter(char => isNaN(char)).map(char => char.toUpperCase());

    const response = {
      "is_success": true,
      "user_id": user_id,
      "email": email,
      "roll_number": roll_number,
      "odd_numbers": odd_numbers,
      "even_numbers": even_numbers,
      "alphabets": alphabets
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ "is_success": false, "error": error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
