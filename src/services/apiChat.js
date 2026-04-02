import { supabaseKey } from "./supabse";

export async function getChatResult(userInput) {
  console.log(userInput)
  const res = await fetch("https://mrfoeewcuhyygzmrxmlk.supabase.co/functions/v1/node-api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${supabaseKey}`
    },
    body: JSON.stringify({ message:userInput }),
    
  });
  const data = await res.json();
  console.log(data);
  // return data.reply;
 
}

 