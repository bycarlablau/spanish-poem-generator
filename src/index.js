
function displayPoem(response) {

    console.log("poem generated");
     new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: "",
     });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context =
      "You are a poem expert who loves to write short poems. Your mission is to generate a 4 line poem using the basic HTML. Do not include a title and make sure to follow the user instructions.";
    let prompt =
      `User instructions: Generate a spanish poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);