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

// Button Conditions
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

// add to cart list
function addToCartList(productName) {
  const cartList = document.getElementById("cart-list");
  const count = cartList.childElementCount;
  const p = document.createElement("p");
  p.innerHTML = `
    ${count + 1}.
    ${productName}
  `;
  cartList.appendChild(p);
}

// Cart Click
document.getElementById("black-cap").addEventListener("click", function () {
  totalProductPrice("black-cap-price");
  addToCartList("Sports Black Cap");
});
document.getElementById("jersey-set").addEventListener("click", function () {
  totalProductPrice("jersey-set-price");
  addToCartList("Full Jersey Set");
});
document.getElementById("sports-cates").addEventListener("click", function () {
  totalProductPrice("sports-cates-price");
  addToCartList("Sports cates");
});
document.getElementById("relax-chair").addEventListener("click", function () {
  totalProductPrice("relax-chair-price");
  addToCartList("Single Relax Chair");
});
document.getElementById("chidren-chair").addEventListener("click", function () {
  totalProductPrice("chidren-chair-price");
  addToCartList("Children play");
});
document.getElementById("sofa-chair").addEventListener("click", function () {
  totalProductPrice("sofa-chair-price");
  addToCartList("Flexible Sofa");
});

//Coupon Button Click
document.getElementById("coupon-button").addEventListener("click", function () {
  const couponText = document.getElementById("coupon-input").value;
  let totalPrice = parseFloat(document.getElementById("total-price").innerText);
  let finalPrice = parseFloat(document.getElementById("final-price").innerText);
  if (couponText == "SELL200") {
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
