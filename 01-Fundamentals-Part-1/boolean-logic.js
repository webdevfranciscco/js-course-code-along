
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
    console.log("Sarah is able to drive.");
} else {
    console.log("Someone else should drive.");
}
