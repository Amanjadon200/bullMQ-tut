import { Queue } from 'bullmq';

const queue = new Queue('email-queue');
const init = async () => {
    const promise = await queue.add('email to aman', { subject: 'Hello Aman', body: 'Hello Aman, this is a test email' });
    console.log(promise);
};
init();