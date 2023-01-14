// Requiring module
const express = require('express')
const cors = require('cors')
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

// Creating express app 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enabling CORS for some specific origins only.
let corsOptions = {
    origin : ['http://localhost:5173'],
    methods: ['GET', 'POST', 'OPTIONS'],
}

app.use(cors(corsOptions));

const HOSTNAME = process.env.VITE_HOSTNAME;
const USERNAME = process.env.PLESK_USERNAME;
const PASSWORD = process.env.PLESK_PASSWORD;
const TARGET_EMAIL = process.env.TARGET_EMAIL;

const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail',
    host: HOSTNAME,
    //port: 465,
    port: 587,
    secure: true,
    auth: {
        user: USERNAME,
        pass: PASSWORD
    },
    tls:{
        rejectUnauthorized:false  // if on local
    }
});

// Sample api routes for testing
router.post('/',(req, res) => {
    try {
        const { name, whatsapp } = req.body;
        const data = {
            from: whatsapp,
            to: TARGET_EMAIL,
            subject: "Заявка",
            text: `Имя: ${name}; Номер: ${whatsapp}`,
        };
        transporter.sendMail(data);
        res.sendStatus(200);
    } catch (error) {
        res.json(error);
    }
});

// Port Number
const port = 5000;
app.use("/", router);
// Server setup
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});