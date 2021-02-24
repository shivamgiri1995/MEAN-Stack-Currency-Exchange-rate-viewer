
const Currency =  require('../_helpers/db');


module.exports = {
    getAll,
    create
};


async function getAll() {
    return await Currency.find().sort();
}

async function create(userParam) {
   
    const currency = new Currency(userParam);

    // save Currency
    await currency.save();
}