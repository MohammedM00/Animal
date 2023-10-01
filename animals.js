// Define the petsData array with image URLs
const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        imageSrc: "stella.jpg" // Replace with the actual image URL
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        imageSrc: "cody.jpg" // Replace with the actual image URL
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        imageSrc: "mango.jpg" // Replace with the actual image URL
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        imageSrc: "lucy.jpg" // Replace with the actual image URL
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        imageSrc: "buhmie.jpg" // Replace with the actual image URL
    }
];

// Function to show pet information including an image
function showInfo() {
    // Get the input element
    const inputElement = document.getElementById("petNum");

    // Get the selected pet index from user input
    const petIndex = parseInt(inputElement.value) - 1; // Subtract 1 to account for 0-based indexing

    // Check if the input is a valid index
    if (petIndex >= 0 && petIndex < petsData.length) {
        // Get the pet data for the selected index
        const selectedPet = petsData[petIndex];

        // Create an image element with a smaller width
        const imageElement = document.createElement("img");
        imageElement.src = selectedPet.imageSrc;
        imageElement.alt = selectedPet.petName;
        imageElement.width = 100; // Adjust the width as needed

        // Format the pet information string
        const petInfoString = `${selectedPet.petName} the ${selectedPet.breed} is ${selectedPet.age} years old. This ${selectedPet.breed.toLowerCase()} weighs ${selectedPet.weightInKilos} kilos and is a ${selectedPet.breed} breed.`;

        // Display the image and formatted pet information
        const selectedPetInfoElement = document.querySelector(".selectedPetInfo");
        selectedPetInfoElement.innerHTML = '';
        selectedPetInfoElement.appendChild(imageElement);
        selectedPetInfoElement.appendChild(document.createElement("br"));
        selectedPetInfoElement.appendChild(document.createTextNode(petInfoString));
    } else {
        alert("Please enter a valid pet number between 1 and " + petsData.length);
    }
}
