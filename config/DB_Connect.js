const mongoose = require('mongoose');

const DBconnect = async (req, res) => {
    try {
await mongoose.connect ('mongodb+srv://khouloud:khouloud123@khouloud09.kzj8jmd.mongodb.net/?retryWrites=true&w=majority');
console.log('Data base is connected');
    }
    catch (error) {
        console.log('Error connecting');
    }
}
module.exports = DBconnect;