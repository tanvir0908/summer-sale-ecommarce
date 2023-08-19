function totalProductPrice(element) {
  let previousTotalPrice = parseFloat(
    document.getElementById("total-price").innerText
  );
  let newItemPrice = parseFloat(document.getElementById(element).innerText);
  let newTotalPrice = previousTotalPrice + newItemPrice;
  document.getElementById("total-price").innerText = newTotalPrice.toFixed(2);
  document.getElementById("final-price").innerText = newTotalPrice.toFixed(2);
  purchaseButtonEnable(newTotalPrice);
}

function purchaseButtonEnable(price) {
  if (price > 0 && price >= 200) {
    document.getElementById("purchase-button").disabled = false;
    document.getElementById("coupon-button").disabled = false;
  } else if (price > 0 && price < 200) {
    document.getElementById("purchase-button").disabled = false;
    document.getElementById("coupon-button").disabled = true;
  } else {
    document.getElementById("purchase-button").disabled = true;
    document.getElementById("coupon-button").disabled = true;
  }
}

// Cart Click
document.getElementById("black-cap").addEventListener("click", function () {
  totalProductPrice("black-cap-price");
});
document.getElementById("jersey-set").addEventListener("click", function () {
  totalProductPrice("jersey-set-price");
});
document.getElementById("sports-cates").addEventListener("click", function () {
  totalProductPrice("sports-cates-price");
});
document.getElementById("relax-chair").addEventListener("click", function () {
  totalProductPrice("relax-chair-price");
});
document.getElementById("chidren-chair").addEventListener("click", function () {
  totalProductPrice("chidren-chair-price");
});
document.getElementById("sofa-chair").addEventListener("click", function () {
  totalProductPrice("sofa-chair-price");
});

//Coupon Button Click
document.getElementById("coupon-button").addEventListener("click", function () {
  const couponText = document.getElementById("coupon-input").value;
  let totalPrice = parseFloat(document.getElementById("total-price").innerText);
  let finalPrice = parseFloat(document.getElementById("final-price").innerText);
  if (couponText == "SALE200") {
    let newDiscountPrice = totalPrice * 0.2;
    document.getElementById("discount-price").innerText =
      newDiscountPrice.toFixed(2);
    let newFinalPrice = totalPrice - newDiscountPrice;
    document.getElementById("final-price").innerText = newFinalPrice.toFixed(2);
  } else {
    finalPrice = totalPrice;
    document.getElementById("final-price").innerText = finalPrice.toFixed(2);
  }
});
