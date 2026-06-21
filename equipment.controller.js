const equipmentModel =
require('../models/equipment.model');
async function getEquipment(req, res) {
try {

    const {
        id_equipment,
        id_provision
    } = req.query;

    let result;

    if (id_equipment) {

        result =
        await equipmentModel
        .getEquipmentById(id_equipment);

    }
    else if (id_provision) {

        result =
        await equipmentModel
        .getEquipmentByProvision(id_provision);

    }
    else {

        result =
        await equipmentModel
        .getAllEquipment();

    }

    res.status(200).json(result);

}
catch(error) {

    console.error(error);

    res.status(500).json({
        message:
        'Error obteniendo equipos'
    });

}

}
module.exports = {
getEquipment
};
