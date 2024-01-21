import axios from "axios";

export default async function handlePrompt(prompt: FormData):Promise<any> {
  const client = axios.create({
    baseURL: "http://localhost:8001",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  });
  const value = prompt.get("prompt-input");
  console.log(prompt.get("prompt-input"));
  try {
    const response = await client.post("/complete", {
      prompt: "Once upon a time",
    });
    console.log(response.data.message);
    return response.data.message
  } catch (error) {}
}
