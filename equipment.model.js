const db = require('../config/database');
async function getAllEquipment() {
const [rows] = await db.execute(`
    SELECT
        ID_EQUIPMENT,
        EQUIPMENT_NAME,
        BRAND,
        MODEL,
        STATUS
    FROM EQUIPMENT
`);

return rows;

}
async function getEquipmentById(idEquipment) {
const [rows] = await db.execute(`
    SELECT
        ID_EQUIPMENT,
        EQUIPMENT_NAME,
        BRAND,
        MODEL,
        STATUS
    FROM EQUIPMENT
    WHERE ID_EQUIPMENT = ?
`, [idEquipment]);

return rows;

}
async function getEquipmentByProvision(idProvision) {
const [rows] = await db.execute(`
    SELECT
        e.ID_EQUIPMENT,
        e.EQUIPMENT_NAME,
        e.BRAND,
        e.MODEL,
        e.STATUS
    FROM EQUIPMENT e
    INNER JOIN EQUIPMENT_PROVISION ep
        ON e.ID_EQUIPMENT = ep.ID_EQUIPMENT
    WHERE ep.ID_PROVISION = ?
`, [idProvision]);

return rows;

}
module.exports = {
getAllEquipment,
getEquipmentById,
getEquipmentByProvision
};
