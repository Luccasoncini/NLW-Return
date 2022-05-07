import { MailAdapter, SendMailAdapter } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0a6b2c5062dab6",
        pass: "0b14c9ea6d69cf"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailAdapter) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Lucca Soncini <luccadiassoncini@getMaxListeners.com>',
            subject,
            html: body,
        });
    
    }
}