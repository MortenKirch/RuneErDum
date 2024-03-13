const btnElem = document.getElementById("myBtn");

btnElem.addEventListener("click", () => {
    const url = "../json/cats.json";

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);

            json.forEach(value => {
                const catContainer = document.createElement("div");
                catContainer.classList.add("cat-container");

                const catImage = document.createElement("img");
                catImage.src = `${value.image}`;
                catImage.alt = `${value.name} ${value.breed}`;
                catImage.classList.add("cat-image")

                const catInfo = document.createElement("ul");

                const nameItem = document.createElement("li");
                nameItem.textContent = `Navn: ${value.name}`;

                const breedItem = document.createElement("li");
                breedItem.textContent = `Race: ${value.breed}`;

                const weightItem = document.createElement("li");
                weightItem.textContent = `THICC: ${value.weight}`;

                catInfo.appendChild(nameItem);
                catInfo.appendChild(breedItem);
                catInfo.appendChild(weightItem);

                catContainer.appendChild(catImage);
                catContainer.appendChild(catInfo);

                const catContainerElem = document.getElementById("catContainer")
                catContainerElem.appendChild(catContainer)
                
            });

        })
        .catch(error => console.error("error:", error));
});