const customerModel =
require('../models/customer.model');
async function getCustomer(req,res){
try{

    const idCustomer =
    req.query['id-customer'];

    if(!idCustomer){

        return res.status(400).json({
            message:
            'Debe enviar id-customer'
        });

    }

    const customer =
    await customerModel
    .getCustomer(idCustomer);

    const addresses =
    await customerModel
    .getAddresses(idCustomer);

    const services =
    await customerModel
    .getServices(idCustomer);

    const equipments =
    await customerModel
    .getEquipments(idCustomer);

    res.status(200).json({
        customer,
        addresses,
        services,
        equipments
    });

}
catch(error){

    console.error(error);

    res.status(500).json({
        message:
        'Error obteniendo cliente'
    });

}

}
module.exports = {
getCustomer
};

