const db = require('../config/database');
async function createOffer(
offerName,
offerPrice
) {
const [result] = await db.execute(
    `
    INSERT INTO OFFER
    (
        OFFER_NAME,
        OFFER_PRICE
    )
    VALUES
    (?,?)
    `,
    [
        offerName,
        offerPrice
    ]
);

return result.insertId;

}
async function addProvision(
offerId,
provisionId
) {
await db.execute(
    `
    INSERT INTO OFFER_PROVISION
    (
        ID_OFFER,
        ID_PROVISION
    )
    VALUES
    (?,?)
    `,
    [
        offerId,
        provisionId
    ]
);

}
async function addService(
offerId,
serviceId
) {
await db.execute(
    `
    INSERT INTO OFFER_SERVICE
    (
        ID_OFFER,
        ID_SERVICE
    )
    VALUES
    (?,?)
    `,
    [
        offerId,
        serviceId
    ]
);

}
async function addEquipment(
offerId,
equipmentId
) {
await db.execute(
    `
    INSERT INTO OFFER_EQUIPMENT
    (
        ID_OFFER,
        ID_EQUIPMENT
    )
    VALUES
    (?,?)
    `,
    [
        offerId,
        equipmentId
    ]
);

}
module.exports = {
createOffer,
addProvision,
addService,
addEquipment
};



