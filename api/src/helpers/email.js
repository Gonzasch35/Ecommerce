const nodemailer = require('nodemailer')

const emailRegistro = async (datos) => {
    const {email, name, token} = datos

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c3e36be665e232",
          pass: "e7feed1ec14f29"
        }
      });

      const info = await transport.sendMail({
        from: 'Ecommerce',
        to: email,
        subject: 'Confirma tu cuenta',
        text: 'Confirma tu cuenta para poder ingresar en la pagina',
        html: `<p>Hola ${name} Comprueba tu cuenta en Ecommerce</p>
        <p>Tu cuenta esta casi lista, has click en el enlace para confirmarla:</p>

            <a href="${process.env.FRONTEND_URL}/confirm/${token}">Comprobar cuenta</a>

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>`
      })
}

const recuperarPass = async (datos) => {
    const {email, name, token} = datos

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c3e36be665e232",
          pass: "e7feed1ec14f29"
        }
      });

      const info = await transport.sendMail({
        from: 'Ecommerce',
        to: email,
        subject: 'Recuperar contraseña',
        text: 'Sigue los pasos para recuperar tu cuenta',
        html: `<p>Hola ${name} Recupera tu cuenta en Ecommerce</p>
        <p>Si no recuerdas tu contraseña, has click en el enlace para registrar una nueva:</p>

            <a href="${process.env.FRONTEND_URL}/login/olvide-password/${token}">Restablecer contraseña</a>

        <p>Si tu no solicitaste un cambio de contraseña, puedes ignorar el mensaje</p>`
      })
}

module.exports = {
    emailRegistro,
    recuperarPass
}