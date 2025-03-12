document.addEventListener('DOMContentLoaded', () => {
    const Products = document.getElementById('products');
    const Catageory_select = document.getElementById('Categories');
    const selectedCategory = localStorage.getItem('selectedCategory');
    const Product = document.getElementById('product_image');
    const IMages = document.getElementById('Images');
    const cartContainer = document.getElementById('cart-container');
    const cartToggleBtn = document.getElementById('cart-toggle-btn');

    let cartItems = []; // Array to hold cart items

    if (Products) {
        // Handling response
        const Data = async () => {
            try {
                const response = await fetch('data.json');
                const Data = await response.json();
                return Data;
            } catch (error) {
                console.log('Error occurred fetching data:', error);
            }
        }

        // Fetch and display filtered products based on category
        Data().then((Data) => {
            if (Data) {
                for (let i = 0; i < Data.length; i++) {
                    const Filter_products = Data[i].Category;

                    if (Filter_products === selectedCategory) {
                        // Creating a div and appending the image 
                        const Details = document.createElement('div');
                        Details.classList.add('Details');
                        IMages.append(Details);

                        const Preview = document.createElement('img');
                        Preview.src = Data[i].img;
                        Details.append(Preview);

                        const Title = document.createElement('span');
                        Title.innerText = Data[i].name;
                        Details.append(Title);

                        const Price = document.createElement('span');
                        Price.innerText = Data[i].price;
                        Details.append(Price);

                        const Text = document.createElement('span');
                        Text.innerText = Data[i].text;
                        Details.append(Text);

                        const addToCartButton = document.createElement('button');
                        addToCartButton.innerText = 'Add to Cart'; // Text for the button
                        addToCartButton.classList.add('add-to-cart'); // You can style this button with this class

                        // Append the "Add to Cart" button to the Details div
                        Details.append(addToCartButton);

                        addToCartButton.addEventListener('click', () => {
                            // Add product to cartItems array
                            cartItems.push({
                                id: Data[i].id,
                                name: Data[i].name,
                                price: Data[i].price,
                                img: Data[i].img,
                                text: Data[i].text,
                                quantity: 1
                            });

                            // Update cart UI
                            updateCart();
                        });
                    }
                }
            }
        });

        // Function to update the cart UI
        function updateCart() {
            cartContainer.innerHTML = ''; // Clear the cart container before updating

            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.dataset.id = item.id;

                // Create image element for the cart item
                const cartImage = document.createElement('img');
                cartImage.src = item.img;
                cartItem.append(cartImage);

                // Create div to hold the product details in the cart item
                const cartDetails = document.createElement('div');
                cartDetails.innerHTML = `
                    <strong>${item.name}</strong><br>
                    Price: ${item.price}<br>
                    Quantity: ${item.quantity}
                `;
                cartItem.append(cartDetails);

                // Append cart item to the cart container
                cartContainer.append(cartItem);

                // Add quantity control and remove button
                const quantityDiv = document.createElement('div');
                quantityDiv.classList.add('quantity-buttons');

                const decreaseBtn = document.createElement('button');
                decreaseBtn.innerText = '-';
                decreaseBtn.addEventListener('click', () => {
                    let quantity = parseInt(quantityInput.value);
                    if (quantity > 1) {
                        quantity--;
                        quantityInput.value = quantity;
                    }
                });

                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.classList.add('Input');
                quantityInput.value = item.quantity;
                quantityInput.min = 1;
                quantityInput.readOnly = true;

                const increaseBtn = document.createElement('button');
                increaseBtn.innerText = '+';
                increaseBtn.addEventListener('click', () => {
                    let quantity = parseInt(quantityInput.value);
                    quantity++;
                    quantityInput.value = quantity;
                });

                quantityDiv.append(decreaseBtn, quantityInput, increaseBtn);
                cartItem.append(quantityDiv);

                // Create a remove button
                const removeBtn = document.createElement('button');
                removeBtn.innerText = 'Remove';
                removeBtn.classList.add('remove-btn');
                removeBtn.addEventListener('click', () => {
                    // Remove the item from cartItems array
                    cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
                    updateCart(); // Refresh the cart UI
                });

                // Append the remove button to the cart item
                cartItem.append(removeBtn);
            });

            // Add Checkout button if not already present
            if (!document.getElementById('checkout-btn')) {
                const checkoutButton = document.createElement('button');
                checkoutButton.innerText = 'Checkout';
                checkoutButton.id = 'checkout-btn';
                checkoutButton.classList.add('checkout-btn');
                cartContainer.append(checkoutButton);

                checkoutButton.addEventListener('click', () => {
                    // When checkout is clicked, process the cart data
                    alert('Proceeding to checkout...');
                    console.log('Cart Items:', cartItems);

                    // Optional: clear the cart after checkout
                    cartItems = [];
                    updateCart(); // Refresh the cart UI (it will be empty)
                });
            }

            // Toggle the cart visibility
            cartToggleBtn.addEventListener('click', () => {
                if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
                    cartContainer.style.display = 'block'; // Show the cart
                } else {
                    cartContainer.style.display = 'none'; // Hide the cart
                }
            });
        }
    }
});