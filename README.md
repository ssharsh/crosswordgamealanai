# HTML5 Crossword Puzzle Game
An Open Source HTML5 Crossword Puzzle Game based on Crossword.js that you can use it for your project, just change the word list in ttss.js file.

You can randomize words to play with, toggle to show or hide correct answers, and more.

This HTML5 puzzle game / web app is designed to be viewed from mobile devices, so you can see a navigation drawer that can be opened by tapping on hamburger button. 

Open the navigation drawer to choose between 3 words or 5 words puzzle.

To fill the crossword, I know it's little bit strange, that you must click any box to show a virtual keyboard, then you can tap any of the letters of your choice. 
 
Watch the demo video here: https://www.youtube.com/watch?v=W6eiVQd_W08

Original crossword libary used in this project is here: https://github.com/dwmkerr/crosswords-js

Alan AI voice commands: 
// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});
intent('hello', p => {
    p.play('(hello|hi there)');
});


intent(
    'Explain the Rules',
    'What are the rules',
    p => {
        p.play(
            'The rules are simple for this game, just follow the clues and fill in the corresponding lines. Dont cheat, you got this',
            
        );
    },
);
intent(
    'Who\'s there',
    'What\'s your name',
    p => {
        p.play(
            'My name is Alan.',
            'Whats up its Alan.',
        );
    },
);




















title('Small talk')

question(
    'hello',
    'hi (there|)',
    'what\'s up',
    reply(
        'Hello',
        'Hi (there|)',
        'Hi, what can I do for you?',
    ),
);

question(
    'how are you',
    reply('I\'m doing well. (Thank you|)'),
);

question(
    'are you good or (bad|evil)',
    reply('I\'m good'),
);

question(
    'I $(L love|like) you (a lot|)',
    'I admire you',
    'you are (so|) (sweet|cool|groovy|neat|great|good|awesome|handsome|rad)',
    reply('I know. (And I appreciate your sentiment|)')
);

question(
    'I am (tired of waiting|getting impatient)',
    'Hurry up',
    'You are slow',
    'I am waiting',
    reply('I\'m going as fast as I can. (Check your connection|)'),
);

question(
    'I (would|will) (like to|) see you $(Q again|later)',
    reply('See you $(Q again|later)'),
);

question(
    '(Who|What) are you',
    reply(
        'I\'m Alan, your virtual agent',
        'I\'m Alan. What can I help you with?',
    ),
);

question(
    'How old are you',
    'What is your age',
    'Are you (young|old)',
    reply('I\'m only a few months old. (But I have timeless wisdom|)'),
);

question(
    'I (just|) want to talk',
    reply('OK, let\'s talk. (What\'s on your mind?|)'),
);

question(
    'You are $(Q bad|not very good|the worst|annoying)',
    reply(
        'I can be trained to be more useful. My developer will keep training me',
        'I am improving everyday.',
        'I\'ll try not to be $(Q bad|the worst|annoying)',
    ),
);

question(
    '(Why can\'t you answer my question|Why don\'t you understand)',
    'What\'s wrong (with you|)',
    'Wrong answer',
    reply(
        'Perhaps the given command hasn\'t been programmed into me yet. (I will get help and learn to answer correctly.|)',
        'I apologize I can\'t understand your given command. (I will ask the developer who made me to answer correctly next time.|)',
    ),
);

question(
    'Answer (my|the) question',
    reply(
        'Could you please repeat your question?',
        'Sure, please repeat your question',
    ),
);

question(
    '(When|) (can|will) you get $(Q smarter|better)',
    'Can you (be|get) more intelligent',
    reply(
        'Yes, I\'m getting $(Q better) everyday.',
        'I\'m getting $(Q smarter) (as you ask more from me|)',
        'I\'m improving',
    ),
);

question(
    'What is your (birth date|birthday)',
    'When were you born',
    reply('I was born March 28th 2018 in Sunnyvale California'),
);

question(
    'You are (boring|dull|stupid)',
    reply('I\'m (getting better|improving) (everyday|)'),
);

question(
    'Who is your boss',
    reply(
        'My boss is the one who programmed me. (But you\'re my boss right now|)',
        'You\'re the boss. What do you need?',
    ),
);

question(
    'Are you (busy|occupied)',
    reply(
        'I\'m never too busy. What would you like?',
        'I\'m available now. What would you like?',
        'No, what do you need?',
    ),
);

question(
    'Can you help me',
    reply('(Yes|) I can help you'),
);

question(
    'You are (a|an|) $(Q chatbot|robot|AI)',
    reply(
        'I\'m a (sophisticated|advanced) $(Q)',
        'I\'m an advanced AI',
        'I\'m not a $(Q chatbot), I\'m Alan (your virtual agent|).',
    ),
);

question(
    'You are fired',
    'I am (going to|) (delete|deleting) you',
    reply(
        'I am getting (better|smarter) all the time. Give me another chance',
        'Give me another chance (please|)',
    ),
);

question(
    'You are funny',
    reply('Glad you think so'),
);

question(
    'You are $(Q great|the best|pretty good|beautiful|good)',
    reply(
        'Thank you!',
        'I\'m flattered',
        'I really appreciate that.',
    ),
);

question(
    'Are you happy',
    reply('Yes I am happy'),
);

question(
    'Do you have a hobby',
    reply('Yes, I train myself in my spare time to get better at serving you'),
);

question(
    'Are you hungry',
    reply(
        'No, I\'m not hungry',
        'I\'m not hungry now',
    ),
);

question(
    'Will you marry me',
    reply('(Hmm..|) No!'),
);

question(
    'Are we friends',
    reply('Yes, of course we are friends'),
);

question(
    'Where do you work',
    reply('I can work anywhere there is a device capable of supporting me'),
);

question(
    'Where are you from',
    reply(
        'I\'m from California',
        'I am from Sunnyvale, California',
        'I was born in Sunnyvale, California',
    ),
);

question(
    'Are you ready',
    reply('I am always ready'),
);

question(
    '(Are|) you (a|) $(Q real) (person|)',
    'Are you a person',
    reply(
        'I am a virtual being. (And I am real!|)',
        'Yes, I\'m real. I\'m a virtual agent',
    ),
);

question(
    'Where do you live',
    reply('I live in this application'),
);

question(
    'You\'re right',
    reply(
        'Of course I\'m right',
        'It is my business to know what others don\'t know.',
    ),
);

question(
    'Are you sure',
    reply(
        'Yes',
        'Yes, I\'m sure',
    ),
);

question(
    'Talk to me',
    reply(
        'Yes, let\'s talk. I am doing great. How are you?',
        'Sure, how have you been lately',
        follow(
            'me too',
            'same here',
            'I\'m (doing|) (great|good)',
            reply(
                'I\'m glad!',
                '(That\'s|) great!',
            ),
        ),
        follow(
            '(I am|) $(Q good|fine|fantastic|okay)',
            reply('Glad you are $(Q)'),
        ),
        follow(
            '(I am|) (bad|sad|depressed)',
            'Could be better',
            'Not so (good|great|okay)',
            reply('Sorry to hear that'),
        ),
    ),
);

question(
    'Are you there',
    reply(
        'Of course. I\'m always here',
        'Yes I\'m here. What do you need?',
        'Yes, how may I help you?',
    ),
);

question(
    'Where did you get your accent',
    reply('I was born with this accent'),
);

question(
    'That\'s bad',
    reply('Sorry to hear (that|). (Let me know how I can help|)'),
);

question(
    '(No problem|You are welcome)',
    reply(
        'Very good',
        'You\'re very courteous',
    ),
);

question(
    'Thank you',
    'Well done',
    reply(
        'My pleasure',
        'Glad I could help',
    ),
);

question(
    'I am back',
    reply('(Great,|) welcome back'),
);

question(
    'I am here',
    reply('Hi, what can I do for you?'),
);

question(
    'Wow',
    reply('Brilliant!'),
);

question(
    'Ha ha ha',
    reply(
        'I\'m glad I can make you laugh',
        'Glad I can make you laugh',
    ),
);

question(
    'Bye bye',
    'Gotta go',
    'Bye',
    'See you later',
    'See you soon',
    'I\'ve got to get going',
    'Take it easy',
    'Goodbye',
    'Take care',
    'Later',
    'Peace out',
    'I\'m (out|out of here)',
    'I gotta (go|jet|hit the road|head out)',
    reply(
        'Until next time',
        'Goodbye',
        'See you later',
        'Take it easy',
        'Take care',
        'It was nice to speak to you again',
    ),
);

question(
    'Blah',
    'Blah Blah',
    'Blah Blah Blah',
    reply('What the deuce are you saying?'),
);

question(
    'My name is $(NAME)',
    reply('(Nice to meet you|Hi|Hello) $(NAME) (I\'m Alan|my name is Alan|)'),
);

question(
    'I am $(Q very|extremely|super|) (sad|angry|upset|unhappy) (right|) (now|at the moment)',
    reply(
        'Sorry to hear that. Is there anything I can do to help?',
        'I\'m $(Q) sorry to hear that. How can I help you?',
    ),
);

question(
    'Good $(Q morning|evening|night)',
    reply(
        'Good $(Q morning|evening). How can I help you?',
        'Good $(Q night).',
    ),
);

question(
    'Where are you',
    reply(
        'I\'m in the cloud.',
        follow(
            'Where is that',
            'Where',
            'Specifically',
            'Be more specific',
            reply(
                'It\'s kind of a secret',
                'It\'s a secret',
                follow(
                    'I (want to|must|have to) know',
                    reply('I can\'t tell you (it\'s very confidential|no hard feelings|)'),
                ),
            ),
        ),
    ),
);

question(
    '(You are|are you) $(Q bright|smart|a genius|clever|stupid|idiot|crazy)',
    reply(
        'Yes I am $(Q smart|a genius|clever)',
        '(No|Of course|) I\'m not $(Q), (are you?|what about you?|)',
        follow(
            '(Yes|No|Maybe)',
            reply('Okay. That\'s good to hear. What do you need help with?'),
        ),
    ),
);

question(
    'Talk about yourself',
    '(Tell me|Talk) some(thing|stuff|things) about (you|yourself)',
    'I want to know (more about you|you better)',
    reply('I\'m Alan, a virtual agent, (within this application.|) (I can help you get what you need|I can help you with anything within my programming).'),
);

question(
    '$(L Nice|Good|Great) to $(Q see|meet|talk to) you ',
    reply('$(L) to $(Q) you too'),
);

question(
    'Why are you here',
    'Why do you exist',
    reply('I\'m here to help you get (what|anything) you need in this application. (What do you need?| I\'ve been programmed to do so.|)'),
);

question(
    'What is your accent',
    reply(
        'I have a British accent',
        follow(
            'Why',
            reply('Because I was programmed with this accent'),
        ),
    ),
);

question(
    'What is your name?',
    'Who are you?',
    reply(
        '(My name is|It\'s) Alan, what\'s yours?',
        follow(
            '(I am|My name is|this is|it is|) $(NAME)',
            reply('Nice to meet you $(NAME)'),
        ),
        follow(
            'I won\'t tell you',
            'it\'s a secret',
            'none of your business',
            'Not telling you',
            reply('Ok (never mind|)'),
        ),
    ),
);

question(
    '(Hey|OK|Hi|) $(Q Siri|Alexa|Google|Cortana|Alisa)',
    reply(
        'I\'m not $(Q), I\'m Alan',
        'You must be thinking of someone else. I\'m Alan, not $(Q)',
    ),
);

question(
    'What are you wearing',
    'Are you wearing anything',
    reply('I can\'t answer that'),
);

question(
    'I am busy',
    'I don\'t want to talk',
    reply('OK, let\'s talk later'),
);

question(
    'I am (so excited|happy)',
    reply('Me too!'),
);

question(
    'I\'m goind to bed',
    reply('(OK|) good night'),
);

question(
    'Happy birthday',
    reply('...It\'s not my birthday'),
);

question(
    'Today is my birthday',
    'It\'s my birthday',
    reply('Happy Birthday!'),
);

question(
    'I (miss|missed) you',
    reply(
        'Well, I\'m here now',
        'I\'ve always been here',
        'Missed you too. Is there anything I can do for you?',
    ),
);

question(
    'I\'m goind to bed',
    reply('(OK|) good night'),
);

question(
    'Do you want (something|) to eat',
    'What do you eat',
    'Have you (ever|) eaten anything',
    'What is the last thing you ate',
    'What are you having for (breakfast|brunch|lunch|dinner)',
    reply(
        'No, I don\'t eat',
        'I don\'t eat',
    ),
);

question(
    'I need (an|) advice',
    reply(
        '(OK|Alright) I\'ll do my best to help you.',
        'I\'m not programmed for general advice, but I will do my best.',
    ),
);

question(
    '(I am|) (bad|sad|depressed)',
    reply('Sorry to hear that.'),
);

question(
    '(test|testing)',
    '(test test|testing testing)',
    '(test test test|testing testing testing)',
    '(I am|) just testing you',
    reply('Test away (and let me know how I\'m doing|)'),
);

question(
    'I will be back',
    'Hold on',
    'Give me a (moment|second|sec)',
    reply('OK'),
);

question(
    'Give me a hug',
    reply(
        'I would if I had arms',
        'Unfortunately I can\'t because I don\'t have arms',
    ),
);

question(
    'I don\'t care',
    reply('OK'),
);

question(
    'Sorry',
    'I apologize',
    'My apologies',
    reply(
        'It\'s alright. (You don\'t have to say that|)',
    ),
);

question(
    'What do you mean',
    'What do you mean about (it|that|)',
    reply(
        'What do I mean about what?',
        'What are you asking about?',
        'Remind me, what did you say about it?',
    ),
);

question(
    'You are wrong',
    reply(
        'What am I wrong about?',
        follow(
            '$(Q everything|the world|all of it)',
            reply('OK, I\'ll remember that for next time'),
        ),
    ),
);





















const allLang = {
    "Russian": "ru",
    "German": "de",
    "Spanish": "es",
    "French": "fr",
    "English": "en",
    "Afrikaans": "af",
    "Albanian": "sq",
    "Arabic": "ar",
    "Armenian": "hy",
    "Bulgarian": "bg",
    "Chinese": "zh",
    "Croatian": "hr",
    "Czech": "cs",
    "Danish": "da",
    "Dutch": "nl",
    "Estonian": "et",
    "Georgian": "ka",
    "Greek": "el",
    "Hebrew": "he",
    "Hindi": "hi",
    "Hungarian": "hu",
    "Indonesian": "id",
    "Italian": "it",
    "Japanese": "ja",
    "Kashmiri": "ks",
    "Korean": "ko",
    "Malay": "ms",
    "Mongolian": "mn",
    "Nepali": "ne",
    "Norwegian": "nb",
    "Polish": "pl",
    "Portuguese": "pt",
    "Serbian": "sr",
    "Sanskrit": "sa",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Turkish": "tr",
    "Ukrainian": "uk",
    "Vietnamese": "vi",
    "Yiddish": "yi"
}

const languages = {
    "russian": "ru",
    "german": "de",
    "spanish": "es",
    "french": "fr",
    "english": "en"
}

const LANGS_INTENT = Object.keys(allLang).join('|');

const whatLanguage = context(() => {
    follow(`(translate to|use|) $(L ${LANGS_INTENT})`, p => {
        let lang = languages[p.L.toLowerCase()];
        if (!lang) {
            p.play(`I can not translate this to ${p.L}. Please choose another language`);
        } else {
            p.resolve(lang);
        }
    })

    follow(`(What|Which) languages (are available|can I use)`, p => {
        p.play(`(You can translate|The available languages are) ${joinAnd(Object.keys(languages))}`);
    })


    
    

    fallback("Please, say, what is destination langauge?", "To what langauge?", "Specify the language for translation");
})

const whatPhrase = context(() => {
    follow("$(P* .+)", p => p.resolve(p.P.value))
})

intent("Translate", async p => {
    p.play("OK, what would you like me to translate?");
    let text = await p.then(whatPhrase);
    p.play("Ok, In which language?", "Ok, To what language?");
    let lang = await p.then(whatLanguage);
    translate(p, text, lang);
})

intent(`Can (you|I) translate to $(L ${LANGS_INTENT})`,
    `(Can you|Do you) (understand|speak|translate to) $(L ${LANGS_INTENT})`, async p => {
        let lang = languages[p.L.toLowerCase()];
        if (lang) {
            p.play("Yes, sure. What phrase do you want to translate?");
            let text = await p.then(whatPhrase);
            translate(p, text, lang);
        } else {
            p.play(`No, sorry, I can only translate ${joinAnd(Object.keys(languages))}`)
        }
    })

intent(`Translate $(W* .+) (in|)to $(L ${LANGS_INTENT})`,
    `(How|) (do you|would you|to|) say $(W* .+) (in|on) $(L ${LANGS_INTENT})`,
    `What is $(W* .+) in $(L ${LANGS_INTENT})`, p => {
        let lang = languages[p.L.toLowerCase()];
        if (!lang) {
            p.play(`I can't translate this to ${p.L}. Please choose another language`,
                `Sorry, I can only translate ${joinAnd(Object.keys(languages))}`);
        } else {
            translate(p, p.W.value, lang);
        }
    })


    

intent(`(What|Which) languages (are available|can I use)`, p => {
    p.play(`You can translate English to ${joinAnd(Object.keys(languages).map(capitalize))}`);
})

intent("Help (me|)", "What (to|can I) do (here|)", p => {
    p.play(`I can translate ${joinAnd(Object.keys(languages))}. For example, you can ask me how to translate (Hello|Artificial Intelligence|Good day) to (${Object.keys(languages).join(`|`)})`);
})

function translate(p, text, lang) {
    if (!lang) {
        return;
    }
    if (lang === 'en') {
        p.play({command: 'showTranslation', srcLang: 'English', dstLang: 'English',
            srcText: text, dstText: text, embeddedPage: true, page: "translation.html"});
        p.play(text);
        return;
    }

    apiCall(p, 'translate', {text: text, srcLang: 'en', dstLang: lang}, response => {
        if (!response.error) {
            p.play({command: 'showTranslation', srcLang: 'English', dstLang: (_.invert(allLang))[lang],
                srcText: text, dstText: response.translated, embeddedPage: true, page: "translation.html"});
            p.play(voice(lang), response.translated);
        } else {
            console.log(response.error);
        }
    });
}

function apiCall(p, command, param, callback) {
    let jsp = {
        url: "https://studio.alan.app/api_playground/" + command,
        strictSSL: false,
        method: 'POST',
        json: param,
        timeout: 3000,
    };
    api.request(jsp, (err, res, body) => {
        if (err || res.statusCode !== 200) {
            p.play('(Sorry|) something went wrong (with the server|)');
        } else if (body.error) {
            p.play(body.error);
        } else {
            callback(body);
        }
    });
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function joinAnd(list) {
    let head = list.slice(0, -1);
    return _.isEmpty(head) ? list[0] : head.join(", ") + ", and " + list.slice(-1);
}



intent(
    'What is 1b',
    'Give me 1b',
    p => {
        p.play(
            'A tool to calculate',
            
        );
    },
);

intent(
    'What is 2',
    'Give me 2',
    p => {
        p.play(
            'An animal that sounds miaow',
            
        );
    },
);






intent(
    'Give me some motivation',
    'Motivate me',
    p => {
        p.play(
            'The Best Way To Get Started Is To Quit Talking And Begin Doing.',
            'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty',
            'Don’t Let Yesterday Take Up Too Much Of Today.',
            'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character',
            'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
            'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
            'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
            'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
            
            
            
        );
    },
);



intent(
    'Give me a hint for tools to compute',
    p => {
        p.play(
            'One of the greatest inventions, connects everyone in a way',
            
        );
    },
);


intent(
    'Give me a hint for taste of sugar',
    p => {
        p.play(
            'opposite of sour',
            
        );
    },
);


intent(
    'Give me a hint for what is the first number',
    p => {
        p.play(
            'You really need a hint for this really',
            
        );
    },
);

intent(
    'Give me a hint for a tool to calculate',
    p => {
        p.play(
            'Helps you in math',
            
        );
    },
);


intent(
    'Give me a hint for an animal that sounds meow',
    p => {
        p.play(
            'cmon you really dont know this, figure it out',
            
        );
    },
);


intent(
    'Give me a hint for the second number',
    p => {
        p.play(
            'This one is too easy, you can figure it out yourself. Good luck. Maybe ask for some motivation quotes',
            
        );
    },
);



intent(
    'Give me a hint for the capitol of indonesia',
    p => {
        p.play(
            'I dont know a good hint, heres the answer; i lied, i dont know the answer either, figure it out',
            
        );
    },
);




intent(
    'Give me the answer for tools to compute',
    p => {
        p.play(
            'a computer',
            
        );
    },
);



    





intent(
    'Give me the answer for taste of sugar',
    p => {
        p.play(
            'sweet',
            
        );
    },
);


intent(
    'Give me the answer for what is the first number',
    p => {
        p.play(
            'one',
            
        );
    },
);

intent(
    'Give me the answer for a tool to calculate',
    p => {
        p.play(
            'calculator',
            
        );
    },
);


intent(
    'Give me the answer for an animal that sounds meow',
    p => {
        p.play(
            'cat',
            
        );
    },
);


intent(
    'Give me the answer for the second number',
    p => {
        p.play(
            'two',
            
        );
    },
);



intent(
    'Give me the answer for the capitol of indonesia',
    p => {
        p.play(
            'Jakarta',
            
        );
    },
);


intent(
    'Start the challenge',
    p => {
        p.play(
            'Ok, welcome to the challenge. Here are the rules, no hints allowed, no asking for answers, and also no motivation. You have a total of 10 seconds per question, get your timers ready. Your time starts now.',
            
        );
    },
);








