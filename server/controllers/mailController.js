const { transporter } = require("../configs");
module.exports = async (req, res) => {
  const { email, subject, content } = req.body;
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject,
      html: content,
    };
    await transporter.sendMail(mailOptions);
    res.send({
      data: `Mail sent successfully to ${email}`,
      status: 200,
    });
  } catch (error) {
    res.send({
      error,
      status: 404,
    });
  }
};
