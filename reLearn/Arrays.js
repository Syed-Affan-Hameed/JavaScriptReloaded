const ai_models=['chatgpt','claude','gemini','llama2','mistral','grok','deepseek','qwen','ernie'];

//iteration using the for-of loop
for (const model of ai_models) {
    console.log(model);
}

// iteration using the for-in loop
for (const index in ai_models) {
    console.log(ai_models[model]);
}