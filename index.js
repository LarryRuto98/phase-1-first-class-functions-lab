// Code your solution in this file!
const returnFirstTwoDrivers = function(driversList) {
    return driversList.slice(0, 2);
};
const returnLastTwoDrivers = function(driversList){
    return  driversList.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(Multiply){
    return function(fare){
        return fare * Multiply

    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driversList, call1){
    return call1(driversList)
}