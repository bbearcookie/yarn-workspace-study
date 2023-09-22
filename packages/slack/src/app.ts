import 'dotenv/config';
import app from '@/configs/express';
// import router from '@/routes';
// import '@/configs/redis';

const PORT = process.env.PORT;

// app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT} port.`);
});
