const db = require('../config/database');
async function getCustomer(idCustomer){
const [rows] = await db.execute(`
    SELECT
        ID_CUSTOMER,
        FIRST_NAME,
        LAST_NAME,
        EMAIL,
        PHONE,
        STATUS
    FROM CUSTOMER
    WHERE ID_CUSTOMER = ?
`,[idCustomer]);

return rows[0];

}
async function getAddresses(idCustomer){
const [rows] = await db.execute(`
    SELECT
        ID_ADDRESS,
        STREET,
        CITY,
        REGION
    FROM ADDRESS
    WHERE ID_CUSTOMER = ?
`,[idCustomer]);

return rows;

}
async function getServices(idCustomer){
const [rows] = await db.execute(`
    SELECT
        s.ID_SERVICE,
        s.SERVICE_NAME,
        s.MONTHLY_COST
    FROM SERVICE s
    INNER JOIN CUSTOMER_SERVICE cs
        ON s.ID_SERVICE = cs.ID_SERVICE
    WHERE cs.ID_CUSTOMER = ?
`,[idCustomer]);

return rows;

}
async function getEquipments(idCustomer){
const [rows] = await db.execute(`
    SELECT
        e.ID_EQUIPMENT,
        e.EQUIPMENT_NAME,
        e.BRAND,
        e.MODEL
    FROM EQUIPMENT e
    INNER JOIN CUSTOMER_EQUIPMENT ce
        ON e.ID_EQUIPMENT = ce.ID_EQUIPMENT
    WHERE ce.ID_CUSTOMER = ?
`,[idCustomer]);

return rows;

}
module.exports = {
getCustomer,
getAddresses,
getServices,
getEquipments
};
