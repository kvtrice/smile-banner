import react, { useState, useEffect } from "react";
import OpenAI from "openai";

const ChatGPT = () => {
	const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
	const openai = new OpenAI({
		apiKey: openaiApiKey,
		dangerouslyAllowBrowser: true,
	});

	const [message, setMessage] = useState("");

	const getMessage = async () => {
		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content:
						"You are an upbeat, happy motivational speaker that's great at making people smile. You have an air of whimsy about you. In a sentence or less, say something happy, motivational, inspiring or an affirmation that would put a smile on someone's face instantly. It should not be too corny or cringey.",
				},
				{ role: "user", content: "" },
			],
			model: "gpt-3.5-turbo",
		});

		setMessage(completion.choices[0].message.content);
	};

	return (
		<div>
			<button onClick={getMessage}>Click me!</button>
			<p>{message}</p>
		</div>
	);
};

export default ChatGPT;
