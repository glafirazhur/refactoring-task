// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
// publishedDate, product published date

const calculatePrice = (userType, productType, price, publishedDate) => {
  const additionalProductPrice = productType ? 35 : 25;
  let rebate = userType ? 5 : 0;
  const today = new Date();

  if (!productType && publishedDate.toDateString() === today.toDateString()) {
    rebate += 10;
  }

  return price + additionalProductPrice - rebate;
};

// save calculation button element
const calcButton = document.querySelector('.calc-button');

// add event listener on calculation button click
calcButton.addEventListener('click', () => {
  try {
    // TODO: add values validation
    const userType = parseInt(document.querySelector('input[name=user-type]:checked').value, 10);
    const companyType = parseInt(document.querySelector('input[name=product-type]:checked').value, 10);
    const price = parseInt(document.querySelector('.price').value, 10);
    const publishedDate = new Date(document.querySelector('.product-date').value);

    console.log(`Calculated price: ${calculatePrice(userType, companyType, price, publishedDate)}`);
  } catch (exception) {
    // Calculate button click without checked product and user types will throw the exception
    console.log(`Thrown exception: ${exception}`);
  }
});
