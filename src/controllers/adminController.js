import { registerAdmin } from '../services/adminService.js';

export const postRegisterAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newAdmin = await registerAdmin({ name, email, password });
        res.status(201).json({message:"usuario registrado com sucesso!",user:newAdmin});
    } catch (error) {
        res.status(400).json({
            message: "Erro ao registrar usuário!",
            detalhes: `${error.message} \n ${error.stack}`
        });
    }
};


