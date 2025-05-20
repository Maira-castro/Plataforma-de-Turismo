import { registerAdmin } from '../services/adminService.js';
import { existeEmail } from '../services/loginService.js';

export const postRegisterAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (await existeEmail(email)) {
           return res.status(400).json({ erro: "O email informado já está cadastrado. Por favor, utilize outro endereço de email." });
        }
        const newAdmin = await registerAdmin({ name, email, password });
        res.status(201).json({ message: "usuario registrado com sucesso!", newAdmin });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao registrar usuário!",
            detalhes: `${error.message} \n ${error.stack}`
        }); 
    }
};


