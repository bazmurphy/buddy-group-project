const showerLengthSlider = document.getElementById("shower-length-slider");
const showerLengthDisplay = document.getElementById("shower-length-display");
const showerLitresUsed = document.getElementById("shower-litres-used");
const showerCostIndividual = document.getElementById("shower-cost-individual");

const showerCostSaving = document.getElementById("shower-cost-saving");
const showerCostSavingWeek = document.getElementById("shower-cost-saving-week");
const showerCostSavingMonth = document.getElementById("shower-cost-saving-month");
const showerCostSavingYear = document.getElementById("shower-cost-saving-year");

const showerWaterSaving = document.getElementById("shower-water-saving");
const showerWaterSavingWeek = document.getElementById("shower-water-saving-week");
const showerWaterSavingMonth = document.getElementById("shower-water-saving-month");
const showerWaterSavingYear = document.getElementById("shower-water-saving-year");

const cleanWaterPricePerCubicMetre = 148.28;
const wasteWaterPricePerCubicMetre = 90.51;
const cleanWaterPricePerLitre = cleanWaterPricePerCubicMetre / 1000;
const wasteWaterPricePerLitre = wasteWaterPricePerCubicMetre / 1000;

showerLengthDisplay.innerHTML = showerLengthSlider.value + " minutes";
showerLitresUsed.innerHTML = showerLengthSlider.value * 10 + " litres";
showerCostIndividual.innerHTML = "£" + parseFloat(showerLengthSlider.value * cleanWaterPricePerLitre).toFixed(2);

showerCostSaving.innerHTML = "0";
showerCostSavingWeek.innerHTML = "0";
showerCostSavingMonth.innerHTML = "0";
showerCostSavingYear.innerHTML = "0";

showerWaterSaving.innerHTML = "0";
showerWaterSavingWeek.innerHTML = "0";
showerWaterSavingMonth.innerHTML = "0";
showerWaterSavingYear.innerHTML = "0";

showerLengthSlider.oninput = function() {
    showerLengthDisplay.innerHTML = showerLengthSlider.value + " minutes";
    showerLitresUsed.innerHTML = showerLengthSlider.value * 10 + " litres";
    showerCostIndividual.innerHTML = "£" + parseFloat(showerLengthSlider.value * cleanWaterPricePerLitre).toFixed(2);

    if (showerLengthSlider.value < 10) {
        showerCostSaving.innerHTML = "+£" + parseFloat((10 * cleanWaterPricePerLitre) - (showerLengthSlider.value * cleanWaterPricePerLitre)).toFixed(2);
        showerCostSavingWeek.innerHTML = "+£" + parseFloat(( (10 * cleanWaterPricePerLitre) - (showerLengthSlider.value * cleanWaterPricePerLitre) ) * 7).toFixed(2);
        showerCostSavingMonth.innerHTML = "+£" + parseFloat(( (10 * cleanWaterPricePerLitre) - (showerLengthSlider.value * cleanWaterPricePerLitre) ) * 30).toFixed(2);
        showerCostSavingYear.innerHTML = "+£" + parseFloat(( (10 * cleanWaterPricePerLitre) - (showerLengthSlider.value * cleanWaterPricePerLitre) ) * 356).toFixed(2);

        showerCostSaving.classList.replace("neutral", "positive");
        showerCostSavingWeek.classList.replace("neutral", "positive");
        showerCostSavingMonth.classList.replace("neutral", "positive");
        showerCostSavingYear.classList.replace("neutral", "positive");
        
        showerWaterSaving.innerHTML = "+" + ((10 * 10) - (showerLengthSlider.value * 10)) + " litres";
        showerWaterSavingWeek.innerHTML = "+" + ((10 * 10) - (showerLengthSlider.value * 10)) * 7 + " litres";
        showerWaterSavingMonth.innerHTML = "+" + ((10 * 10) - (showerLengthSlider.value * 10)) * 30 + " litres";
        showerWaterSavingYear.innerHTML = "+" + ((10 * 10) - (showerLengthSlider.value * 10)) * 365 + " litres";

        showerWaterSaving.classList.replace("neutral", "positive");
        showerWaterSavingWeek.classList.replace("neutral", "positive");
        showerWaterSavingMonth.classList.replace("neutral", "positive");
        showerWaterSavingYear.classList.replace("neutral", "positive");

    } else if (showerLengthSlider.value > 10) {
        showerCostSaving.innerHTML = "-£" + parseFloat(( (showerLengthSlider.value * cleanWaterPricePerLitre) - (10 * cleanWaterPricePerLitre))).toFixed(2);
        showerCostSavingWeek.innerHTML = "-£" + parseFloat(( (showerLengthSlider.value * cleanWaterPricePerLitre) - (10 * cleanWaterPricePerLitre)) * 7).toFixed(2);
        showerCostSavingMonth.innerHTML = "-£" + parseFloat(( (showerLengthSlider.value * cleanWaterPricePerLitre) - (10 * cleanWaterPricePerLitre)) * 30).toFixed(2);
        showerCostSavingYear.innerHTML = "-£" + parseFloat(( (showerLengthSlider.value * cleanWaterPricePerLitre) - (10 * cleanWaterPricePerLitre)) * 356).toFixed(2);
        
        showerCostSaving.classList.replace("neutral", "negative");
        showerCostSavingWeek.classList.replace("neutral", "negative");
        showerCostSavingMonth.classList.replace("neutral", "negative");
        showerCostSavingYear.classList.replace("neutral", "negative");

        showerWaterSaving.innerHTML = "-" + ((showerLengthSlider.value * 10) - (10 * 10)) + " litres";
        showerWaterSavingWeek.innerHTML = "-" + ((showerLengthSlider.value * 10) - (10 * 10)) * 7 + " litres";
        showerWaterSavingMonth.innerHTML = "-" + ((showerLengthSlider.value * 10) - (10 * 10)) * 30 + " litres";
        showerWaterSavingYear.innerHTML = "-" + ((showerLengthSlider.value * 10) - (10 * 10)) * 365 + " litres";

        showerWaterSaving.classList.replace("neutral", "negative");
        showerWaterSavingWeek.classList.replace("neutral", "negative");
        showerWaterSavingMonth.classList.replace("neutral", "negative");
        showerWaterSavingYear.classList.replace("neutral", "negative");       

    } else {
        showerCostSaving.innerHTML = "0";
        showerCostSavingWeek.innerHTML = "0";
        showerCostSavingMonth.innerHTML = "0";
        showerCostSavingYear.innerHTML = "0";

        showerCostSaving.classList.remove("positive", "negative");
        showerCostSaving.classList.add("neutral");
        showerCostSavingWeek.classList.remove("positive", "negative");
        showerCostSavingWeek.classList.add("neutral");
        showerCostSavingMonth.classList.remove("positive", "negative");
        showerCostSavingMonth.classList.add("neutral");
        showerCostSavingYear.classList.remove("positive", "negative");
        showerCostSavingYear.classList.add("neutral");

        showerWaterSaving.innerHTML = "0";
        showerWaterSavingWeek.innerHTML = "0";
        showerWaterSavingMonth.innerHTML = "0";
        showerWaterSavingYear.innerHTML = "0";

        showerWaterSaving.classList.remove("positive", "negative");
        showerWaterSaving.classList.add("neutral");
        showerWaterSavingWeek.classList.remove("positive", "negative");
        showerWaterSavingWeek.classList.add("neutral");
        showerWaterSavingMonth.classList.remove("positive", "negative");
        showerWaterSavingMonth.classList.add("neutral");
        showerWaterSavingYear.classList.remove("positive", "negative");
        showerWaterSavingYear.classList.add("neutral");
    }
}