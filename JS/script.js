let featuresInfo = document.querySelector(".features-info");
let companyInfo = document.querySelector(".company-info");
let features = document.querySelector(".features");
let company = document.querySelector(".company");
let featuresArrow = document.querySelector(".features-arrow");
let companyArrow = document.querySelector(".company-arrow");

let featureCurrentArrow = "down";
let companyCurrentArrow = "down";

featuresInfo.addEventListener("click", () => {
    features.classList.toggle("hidden");
    if (featureCurrentArrow === "down") {
        featureCurrentArrow = "up";
        featuresArrow.setAttribute(
            "src",
            `./images/icon-arrow-${featureCurrentArrow}.svg`
        );
    } else {
        featureCurrentArrow = "down";
        featuresArrow.setAttribute(
            "src",
            `./images/icon-arrow-${featureCurrentArrow}.svg`
        );
    }
});

companyInfo.addEventListener("click", () => {
    company.classList.toggle("hidden");
    if (companyCurrentArrow === "down") {
        companyCurrentArrow = "up";
        companyArrow.setAttribute(
            "src",
            `./images/icon-arrow-${companyCurrentArrow}.svg`
        );
    } else {
        companyCurrentArrow = "down";
        companyArrow.setAttribute(
            "src",
            `./images/icon-arrow-${companyCurrentArrow}.svg`
        );
    }
});
