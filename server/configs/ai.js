import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
    timeout: 60*1000,
});

export default ai