import { LoginService } from "../services/loginService.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await LoginService(email, password)
        res.status(200).json({
            message: `Login realizado com sucesso! Bem-vindo, ${usuario.name}`,
            token: usuario.token,
        });
    } catch (error) {
        if (error.message === "Email ou senha inválidos!") {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({
            message: "erro ao fazer login!",
            error: error.message
        })
    }
};
