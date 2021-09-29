const express = require("express");
const { transporter } = require("../configs");
const router = express.Router();

router
  .route("/send")
  .get((req, res) => {
    res.send({
      data: `${req.baseUrl}${req.url} is a post route handling email related stuff`,
    });
  })
  .post(async (req, res) => {
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
  });

module.exports = router;
