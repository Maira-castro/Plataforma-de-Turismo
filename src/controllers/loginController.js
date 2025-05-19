import { LoginService } from "../services/loginService.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const usuario = await LoginService(email, password)

        res.status(200).json({
            message: "Login realizado com sucesso!",
            usuario: { name: usuario.name, email: usuario.email, tipo: usuario.tipo },
            token: usuario.token,
        });
    } catch (error) {
        if (error.message === "Credenciais não encontradas!") {
            return res.status(401).json({ message: error.message });
        }
        res.status(500).json({
            message: "erro ao fazer login!",
            error: error.message
        })
    }
};
