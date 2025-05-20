import { existeEmail } from "../services/loginService.js";
import { registerUser } from "../services/userService.js";

export const postRegisterTourist = async (req, res) => {
    const { name, email, password, phone } = req.body
    try {
        if (await existeEmail(email)) {
            return res.status(400).json({ erro: "O email informado já está cadastrado. Por favor, utilize outro endereço de email." });
        }
        const newUser = await registerUser({ name, email, password, phone })

        res.status(201).json({ message: "usuário registrado com sucesso!", newUser })
    } catch (error) {
        res.status(500).json({
            message: "erro ao registrar usuario!",
            detalhes: `${error.message} \n ${error.stack}`,
        })
    }
}