import express from 'express';

const app = express();

// app.get ('/', (req,res) =>{
//     res.send('Server is ready');
// });

//get a list of 5 jokes

app.get('/api/jokes', (req,res) =>{
    const jokes = [
        {
          "id": 1,
          "title": "The Programmer's Dilemma",
          "content": "Why do programmers prefer dark mode? Because the light attracts bugs!"
        },
        {
          "id": 2,
          "title": "Debugging Woes",
          "content": "How many programmers does it take to change a light bulb? None. It's a hardware problem!"
        },
        {
          "id": 3,
          "title": "Semicolon Surprise",
          "content": "A SQL query walks into a bar, sees two tables and asks, 'Can I join you?'"
        },
        {
          "id": 4,
          "title": "The Stack Overflow",
          "content": "Why do Java developers wear glasses? Because they don’t see sharp!"
        },
        {
          "id": 5,
          "title": "Lost in Translation",
          "content": "There are 10 types of people in the world: those who understand binary and those who don’t."
        }
      ];
      res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('Server at http://localhost:${port}');
});