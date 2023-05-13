const { response, request } = require('express')
const { User,Auth } = require('../database/fireService')

const getListaUsuarios = async (req = request, res = response) => {
    const snapshot = await User.get();
    // const snapshot = await User.where('pin','==','0000').get();
    const list = snapshot.docs.map((doc) => doc.data());
    res.json({
        data: list
    })
}

const verificarCI = async(req,res) =>{
    const { ci } = req.body; // Recuperar el número de cédula de identidad del cuerpo de la solicitud
    const query = User.where('ci', '==', ci).limit(1); // Buscar el usuario por su número de cédula de identidad
    const querySnapshot = await query.get();
        if (querySnapshot.empty) { // Si no se encontró el usuario, devolver un error 404
            return res.status(404).json({ error: 'Usuario no encontrado' });
        } else { // Si se encontró el usuario, devolver su nombre
            const user = querySnapshot.docs[0].data();
            return res.json({ name: user.name});
    }
}
const verificarFoto = async(req,res) =>{
    
}


module.exports = {
    getListaUsuarios,
    verificarCI,
    verificarFoto
}

