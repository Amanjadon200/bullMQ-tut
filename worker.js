import { Worker } from 'bullmq';
import 'dotenv/config';

const sendEmail = async () => {
    console.log('Sending email...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email sent!');
            resolve();
        }, 5000);
    });
};
try {
    const worker = new Worker('email-queue', async (job) => {
        console.log(`Processing job ${job.id} of type ${job.name} with data: ${job.data}`);
        await sendEmail();
        console.log(`email of this ${job.id} job id sent`);
    }, {
        connection: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        }
    });
} catch (err) {
    console.log(err);
}