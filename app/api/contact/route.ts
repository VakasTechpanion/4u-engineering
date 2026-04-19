import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const file = formData.get("file") as File | null;

        let attachments = [];

        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());

            attachments.push({
                filename: file.name,
                content: buffer,
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"4U Website" <${process.env.EMAIL_USER}>`,
            to: "hr@4uengg.com",
            subject: "New Submission from Website",
            html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
            attachments,
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return Response.json({ success: false }, { status: 500 });
    }
}