"use client";
import { useState } from "react";
import handlePrompt from "./utils/handle-prompt";


export default function Home() {
  const [prompt, setPrompt] = useState("Nothing Here Yer");

  return (
    <main className="flex flex-col items-center px-4 ">
      <form
        action={async (formData) => {
          const response:any = await handlePrompt(formData)
          setPrompt(response)
          
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-100">
            Prompt
          </label>
          <input
            type="text"
            id="prompt-input"
            name="prompt-input"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 text-gray-700 "
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
      <section className="flex text-gray-100 text-center justify-center w-[50rem] mt-8">
        {/* {prompt.data.message} */}
        {prompt}
      </section>
    </main>
  );
}
