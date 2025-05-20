import { existeEmail } from "../services/loginService.js";
import { registerUser } from "../services/userService.js";
export const postRegisterTourist = async (req, res) => {
    const { name, email, password, phone } = req.body
    try {
        if (await existeEmail(email)) {
            return res.status(400).json({ erro: "O e-mail informado já está cadastrado. Por favor, utilize outro endereço de e-mail." });
        }
        const newRegistedUser = await registerUser({ name, email, password, phone })

        res.status(201).json({ message: "usuário registrado com sucesso!", user: newRegistedUser })
    } catch (error) {
        res.status(400).json({
            message: "erro ao registrar usuario!",
            detalhes: `${error.message} \n ${error.stack}`,

        })
    }
}