const mongoose = require("mongoose");
// const Schema = mongoose.schema;

const testSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    zipCode: {
        type: Number
    },
    numPeopleInHome: {
        type: Number
    },
    numVehicles: {
        type: Number
    },
    heatSource: {
        naturalGas: {
            type: Boolean,
            default: false
        },
        electricity: {
            type: Boolean,
            default: false  
        },
        fuelOil: {
            type: Boolean,
            default: false
        },
        propane: {
            type: Boolean,
            default: false
        } 
    },
    avgWeeklyMiles: {
        type: Number,
        default: 2019
    },
    monthlyGasBill: {
        type: Number,
        default: 0
    },
    monthlyElectricBill: {
        type: Number,
        default: 0
    },
    montlyFuelBill: {
        type: Number,
        default: 0
    },
    monthlyPropaneBill: {
        type: Number,
        default: 0
    },
    // dollar value
    avgWasteEmission: {
        type: Number,
    },
    recyclingCans: {
        type: Boolean,
        default: false
    },
    recyclingPlastics: {
        type: Boolean,
        default: false
    },
    recyclingGlass: {
        type: Boolean,
        default: false
    },
    recyclingNewspapers: {
        type: Boolean,
        default: false
    },
    recyclingMagazines: {
        type: Boolean,
        default: false
    }
});

const test = mongoose.model("test", testSchema);

module.exports = test;