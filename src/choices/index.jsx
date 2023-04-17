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

    },
    {
        name: 'English to other languages',
        id: 'trans',
        description: 'Translates English text into French, Spanish and Japanese.',

    },
    {
        name: 'Movie to Emoji',
        id: 'm2e',
        description: 'Convert movie titles into emojiimage.',

    },
    {
        name: 'Explain code',
        id: 'code',
        description: 'Explain a complicated piece of code.',

    },
    {
        name: 'JavaScript to Python',
        id: 'j2p',
        description: 'Convert simple JavaScript expressions into Python.',

    },




]