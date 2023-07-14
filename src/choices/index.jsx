export const items = [
    {
        name: 'Q&A',
        id: 'q&a',
        description: 'Answer questions based on existing knowledge.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["{}"],
        }
    },
    {
        name: 'Grammer Correction',
        id: 'gc',
        description: 'Corrects sentences into standard English.',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }

    },
    {
        name: 'English to other languages',
        id: 'trans',
        description: 'Translates English text into French, Spanish and Japanese.',
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }

    },
    {
        name: 'Movie to Emoji',
        id: 'm2e',
        description: 'Convert movie titles into emojiimage.',
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }

    },
    {
        name: 'Explain code',
        id: 'code',
        description: 'Explain a complicated piece of code.',
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
          }

    },
    {
        name: 'JavaScript to Python',
        id: 'j2p',
        description: 'Convert simple JavaScript expressions into Python.',
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          }
    },




]