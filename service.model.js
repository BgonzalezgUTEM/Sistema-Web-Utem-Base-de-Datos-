const db = require('../config/database');
async function getAllServices() {
const [rows] = await db.execute(`
    SELECT
        ID_SERVICE,
        SERVICE_NAME,
        MONTHLY_COST,
        STATUS
    FROM SERVICE
`);

return rows;

}
async function getServiceById(idService) {
const [rows] = await db.execute(`
    SELECT
        ID_SERVICE,
        SERVICE_NAME,
        MONTHLY_COST,
        STATUS
    FROM SERVICE
    WHERE ID_SERVICE = ?
`,
[idService]);

return rows;

}
async function getServicesByProvision(idProvision) {
const [rows] = await db.execute(`
    SELECT
        s.ID_SERVICE,
        s.SERVICE_NAME,
        s.MONTHLY_COST,
        s.STATUS
    FROM SERVICE s
    INNER JOIN SERVICE_PROVISION sp
        ON s.ID_SERVICE = sp.ID_SERVICE
    WHERE sp.ID_PROVISION = ?
`,
[idProvision]);

return rows;

}
module.exports = {
getAllServices,
getServiceById,
getServicesByProvision
};
