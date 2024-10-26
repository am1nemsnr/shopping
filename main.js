document.addEventListener('DOMContentLoaded', () => {
    const totalPriceElement = document.getElementById('total-price');

    document.querySelectorAll('.card-body').forEach(cardBody => {
        const plusButton = cardBody.querySelector('.fa-plus-circle');
        const minusButton = cardBody.querySelector('.fa-minus-circle');
        const deleteButton = cardBody.querySelector('.fa-trash-alt');
        const likeButton = cardBody.querySelector('.fa-heart');
        const quantityElement = cardBody.querySelector('.qute');
        const unitPrice = parseFloat(cardBody.querySelector('.unitt-price').textContent);

        plusButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            currentQuantity++;
            quantityElement.textContent = currentQuantity;
            updateTotalPrice();
        });

        minusButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityElement.textContent = currentQuantity;
            }
            updateTotalPrice();
        });

        deleteButton.addEventListener('click', () => {
            cardBody.closest('.card').remove();
            updateTotalPrice();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
            likeButton.style.color = likeButton.classList.contains('liked') ? 'red' : '';
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.card-body').forEach(cardBody => {
            const quantity = parseInt(cardBody.querySelector('.qute').textContent);
            const unitPrice = parseFloat(cardBody.querySelector('.unitt-price').textContent);
            totalPrice += quantity * unitPrice;
        });
        totalPriceElement.textContent = totalPrice;
    }
});
