const checkoutForm = document.querySelector("#checkout-form");
const container = document.querySelector("#container");
const successDiv = document.querySelector("#success-div");
const screenSpan = document.querySelector("#screen-span");
const backBtn = document.querySelector("#back-to-payment-btn");

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    container.style.display = "none";
    successDiv.style.display = "block";
    screenSpan.innerText = "Payment Done Successfully";
});

backBtn.addEventListener("click", (e) => {
    container.style.display = "flex";
    successDiv.style.display = "none";
    screenSpan.innerText = "Payment Screen";
    checkoutForm.reset();
})