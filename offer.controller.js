const offerModel =
require('../models/offer.model');
async function createOffer(req, res) {
try {

    const {
        offerName,
        offerPrice,
        provisions,
        services,
        equipments
    } = req.body;

    const offerId =
    await offerModel.createOffer(
        offerName,
        offerPrice
    );

    if (
        provisions &&
        provisions.length > 0
    ) {

        for(const provision of provisions){

            await offerModel.addProvision(
                offerId,
                provision
            );

        }

    }

    if (
        services &&
        services.length > 0
    ) {

        for(const service of services){

            await offerModel.addService(
                offerId,
                service
            );

        }

    }

    if (
        equipments &&
        equipments.length > 0
    ) {

        for(const equipment of equipments){

            await offerModel.addEquipment(
                offerId,
                equipment
            );

        }

    }

    res.status(201).json({
        message:
        'Oferta creada correctamente',
        offerId
    });

}
catch(error){

    console.error(error);

    res.status(500).json({
        message:
        'Error creando oferta'
    });

}

}
module.exports = {
createOffer
};
