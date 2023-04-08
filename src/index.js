let parisDateTimeInfo = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY hh:mm A");
let parisDateTimeInfoElement = document.querySelector("#paris");
parisDateTimeInfoElement.innerHTML = parisDateTimeInfo;

let tokyoDateTimeInfo = moment()
  .tz("Asia/Tokyo")
  .format("dddd, MMMM D, YYYY hh:mm A");
let tokyoDateTimeInfoElement = document.querySelector("#tokyo");
tokyoDateTimeInfoElement.innerHTML = tokyoDateTimeInfo;

let sydneyDateTimeInfo = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY hh:mm A");
let sydneyDateTimeInfoElement = document.querySelector("#sydney");
sydneyDateTimeInfoElement.innerHTML = sydneyDateTimeInfo;

function showTimeZoneInfo(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(`It is currently ${parisDateTimeInfo} in Europe/Paris`);
    }

    if (event.target.value === "tokyo") {
      alert(`It is currently ${tokyoDateTimeInfo} in Asia/Tokyo`);
    }

    if (event.target.value === "sydney") {
      alert(`It is currently ${sydneyDateTimeInfo} in Asia/Tokyo`);
    }
  }
}
let countrySelection = document.querySelector("#countries");
countrySelection.addEventListener("change", showTimeZoneInfo);
