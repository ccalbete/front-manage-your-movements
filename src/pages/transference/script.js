const transferenceForm = document.getElementById("transferenceForm");

const transferenceDateElement = document.getElementById("transferenceDate");

const transferenceOriginInput = document.getElementById("transferenceOriginInput");
const transferenceOriginsDataList = document.getElementById("transferenceOrigins");

const transferenceAmountInput = document.getElementById("transferenceAmountInput")

const transferenceDestintationInput = document.getElementById("transferenceDestintationInput");
const transferenceDestinationsDataList = document.getElementById("transferenceDestinations");

function transferenceCreateAndFillElements() {
    getUserDebitPaymentModes().then(transferencePaymentModesList => {
        fillList(transferencePaymentModesList, transferenceOriginsDataList);
        fillList(transferencePaymentModesList, transferenceDestinationsDataList);
    });

    setCurrentDateByDefault(transferenceDateElement);
}

function saveTransferenceData() {
    fetch(url + "/transfers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
            "date": transferenceDateElement.value,
            "origin": transferenceOriginInput.value,
            "amount": parseInt(transferenceAmountInput.value),
            "destination": transferenceDestintationInput.value
        })
    }).then().catch(error => console.error('Error: ', error));

    resetForm(transferenceForm, transferenceDateElement);
}