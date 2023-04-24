import {pool} from "../DB.js"

export const getAprendices =  async(req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM aprendis ORDER BY id DESC");
        console.log("resultado: "+result[0])
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

//buscar un SOLO aprendis por id
export const getAprendiz = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM aprendis where id=?", [req.params.id])
        if(result.length === 0){
            return res.status(404).json({message: "Aprendiz not found"})
        }
    }catch(err){
        return res.status(404).json({
            message: err.message,
        });
    }
};

//insertar un registro
export const createAprendiz = async (req, res) => {
    try{
        const {name,surname,telefono,sexo} = req.body;
        const [result] = await pool.query("INSERT INTO aprendis(name,surname,telefono,sexo) VALUES(?,?,?,?,?)",
        [name.surname,telefono,sexo]
        );
        res.json({
            id: result.insertId,
            name,
            surname,
            telefono,
            sexo
        });
    }catch(error){
        return res.status(404).json({
            message:error.message
        });
    }
}


//actualizar un registro
export const editAprendiz = async(req, res) => {
    try{
      const {nombre, cedula, celular} = req.body;
      const [result] = await pool.query(
        "UPDATE usuarios SET ? WHERE id=?",
        [req.body, req.params.id]
      );
      return res.status(200).json(result)
    }catch(error){
      return res.error(404).json({
        message: error.message
      })
    }
  } 

  //eliminar un registro
  export const deleteAprendiz = async(req, res) => {
    try {
      const [result] = await pool.query(
        "DELETE FROM usuarios WHERE id=?",
        [req.params.id]
      );
      return res.status(200).json({message: "Usuario eliminado"})
    }catch(error){
      return res.status(500).json({
        message: error.message
      })
    }
  }