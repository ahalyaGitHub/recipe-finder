document.getElementById("button").addEventListener('click', () => {
    let inputValue = document.getElementById('inputName').value;

    fetch(`/meals?name=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            const items = document.getElementById("items");
            items.innerHTML = "";  // Clear previous results
            const details = document.getElementById("details");
            details.innerHTML = "";  // Clear previous details

            if (data.length === 0) {
                const msg = document.getElementById("msg");
                msg.style.display = "block";
                setTimeout(() => { msg.style.display = "none"; }, 5000);
            } else {
                document.getElementById("msg").style.display = "none";
                data.forEach(meal => {
                    const itemDiv = document.createElement("div");
                    itemDiv.className = "m-2 singleItem";
                    itemDiv.setAttribute('onclick', `details('${meal._id}')`);
                    const itemInfo = `
                        <div class="card" style="width: 12rem; height: 16rem;">
                            <img src="${meal.thumbnail}" class="card-img-top" alt="img" style="width: 100%; height: 75%;">
                            <div class="card-body text-center">
                                <h3 class="card-text fw-bolder fs-6">${meal.name}</h3>
                            </div>
                        </div>`;
                    itemDiv.innerHTML = itemInfo;
                    items.appendChild(itemDiv);
                });
                items.scrollIntoView({ behavior: 'smooth' });
            }
        })
        .catch(err => console.error('Error fetching meals:', err));
});

function details(id) {
    fetch(`/meals/${id}`)
        .then(res => res.json())
        .then(meal => {
            const details = document.getElementById("details");
            details.innerHTML = "";  // Clear previous details
            const detailsDiv = document.createElement("div");
            detailsDiv.className = "card details-card";
            detailsDiv.style.width = "100%";
            detailsDiv.style.display = "flex";
            detailsDiv.style.flexDirection = "row";
            detailsDiv.innerHTML = `
                <img src="${meal.thumbnail}" class="card-img-left img-fluid" alt="img" style="width: 40%; height: auto;">
                <div class="card-body" style="width: 60%; padding-left: 20px;">
                    <h3 class="card-text fw-bold text-center">${meal.name}</h3>
                    <b>Instructions:</b><br>
                    <p class="fw-light">${meal.instructions}</p>
                    <a href="${meal.video}" target="_blank" class="btn btn-primary">Watch Recipe</a>
                </div>`;
            details.appendChild(detailsDiv);
            details.scrollIntoView({ behavior: 'smooth' });
        })
        .catch(err => console.error('Error fetching meal details:', err));
}
