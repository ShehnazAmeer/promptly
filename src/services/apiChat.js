export async function getChatResult(userInput) {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer ",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: userInput,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
};

