const DATAENITY = require("../../date");

const getEntity = (req, res)=>{
    const { range1, range2 } = req.params
    let newData = []
    if(Number(range1) > Number(range2) ){
        res.status(400).send({ description: 'Error en validación datos de entrada' });
    }
    else{
        DATAENITY.forEach(function(numero) {
            if (numero.data.entityId >= Number(range1) & numero.data.entityId <= Number(range2) )  newData.push(numero)
        });
        if(newData.length == 0) res.status(404).send({ description: 'Error no se encuentra para rango especificado' });
        else res.send(newData)
    }
}

module.exports = {getEntity};