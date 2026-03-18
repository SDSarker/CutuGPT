import React, { useState, useEffect, useRef } from "react";

import logo from "/logo.jpg";

const FormattedText = ({ text }) => {
  if (!text) return null;
  // This splits the text by ** and maps them to <strong> tags
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="whitespace-pre-line">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-blue-400 font-bold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </div>
  );
};

// Typing component for the bot responses
const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  // Use the FormattedText component here
  return <FormattedText text={displayedText} />;
};

const CutuGPT = () => {
  const [input, setInput] = useState("");
  const [streak, setStreak] = useState(0);
  const [aura, setAura] = useState(1000);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "What's up Sigma? I'm the mewing Arinjoy Ghosh Hrivu. Ask me about Polar Bears or Roblox!",
      isNew: false,
    },
  ]);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const suggestions = [
    "What questions should I ask you?",
    "Who are you?",
    "Say haati",
    "What is 6+7?",
    "Tell me about Polar Bears",
    "What do you do?",
    "What is your aim in life?",
    "Bye Cutu!",
  ];

  const getResponse = (query) => {
    const q = query.toLowerCase().trim();

    // 1. GREETINGS & GOODBYES (Improved variations)
    if (/^(hi|hello|hey|yo|wassup|sup|hola|hey there)$/.test(q)) {
      return "Yo! What's up Sigma? Ready to increase your Aura today? 🗿";
    }
    if (
      q.includes("how are you") ||
      q.includes("how u doing") ||
      q.includes("u ok") ||
      q.includes("feeling")
    ) {
      return "I'm maintaining my mewing streak and playing Roblox. Feeling very Sigma. How about you?";
    }
    if (
      q.includes("good") ||
      q.includes("fine") ||
      q.includes("great") ||
      q.includes("happy")
    ) {
      return "That's what a true Sigma likes to hear. +10 Aura for having a good day. 🗿✨";
    }
    if (
      q.includes("bye") ||
      q.includes("see you") ||
      q.includes("later") ||
      q.includes("tata") ||
      q.includes("goodnight")
    ) {
      return "Bye bye! *puts finger to lips* Going back to my mewing streak. Don't lose your Aura while I'm gone! 🤫🧏‍♂️";
    }
    if (q.includes("thank")) {
      return "No problem, pookie! Just don't let the Fanum Tax hit you on the way out.";
    }

    // 2. GEN ALPHA / GEN Z SLANG EXPERT (Expanded)
    if (
      q.includes("word") ||
      q.includes("slang") ||
      q.includes("alpha") ||
      q.includes("gen z") ||
      q.includes("speak")
    ) {
      return "Okay, listen to the master: 'Mewing' is for the jawline, 'Fanum Tax' is stealing food, 'Sigma' is being the GOAT, 'Aura' is your vibe points, 'Skibidi' is everything, and 'Rizz' is your charm. Stay focused! 🧠🔥";
    }
    if (q.includes("skibidi"))
      return "Skibidi Toilet is peak cinema. The lore is actually deeper than my 9 subjects! 🚽";
    if (q.includes("mewing"))
      return "Shhh! 🤫 I'm mewing. My jawline is currently sharp enough to cut a Roblox block.";
    if (q.includes("aura"))
      return "Aura is your social currency. Asking me a cool question is +50 Aura. Asking a boring question is -100 Aura. 📉";
    if (q.includes("fanum tax"))
      return "If you have a snack and I take a bite, that's Fanum Tax. I don't make the rules, the Kai Cenat does. 🍕";

    // 3. ANIMAL & NATURE EXPERT (More Keywords)
    const animalKnowledge = {
      tiger:
        "Tigers are the biggest cats! They have orange fur with black stripes. Total Sigmas of the jungle. 🐯",
      lion: "Lions are the kings of the savanna. They live in prides and sleep 20 hours a day. High Aura energy. 🦁",
      shark:
        "Sharks have been around since before dinosaurs! They never stop swimming or they lose their oxygen streak. 🦈",
      dog: "Dogs are man's best friend. 100% loyalty and zero fanum tax. 🐶",
      cat: "Cats are tiny tigers that live in your house and judge your mewing streak. 🐱",
      bee: "Bees are the MVPs. They make honey. If they sting you, they lose their Aura forever. 🐝",
      bird: "Birds are cool, especially eagles and hawks. They have the best view of the Skibidi world from up there! 🦅",
      spider:
        "Spiders have 8 legs and are expert hunters. Some are scary, but most are just vibing. 🕷️",
      snake:
        "Snakes are just long noodles with scales. Some have venom, which is basically KPop Demon hunter poison. 🐍",
      insect:
        "Insects are awesome! Some ants can lift 50x their body weight. That's true Sigma strength. 🐜",
      whale:
        "Blue whales are so big their hearts are the size of a car! Massive Aura. 🐳",
      wolf: "Wolves are the ultimate pack Sigmas. They howl at the moon to show off their Rizz. 🐺",
    };

    for (let key in animalKnowledge) {
      if (q.includes(key))
        return `${animalKnowledge[key]} I'm a pro animal doctor, ask me anything! ✨`;
    }

    // 4. PERSONA VARIATIONS

    // Help / Guide Trigger
    // Help / Guide Trigger
    if (
      q.includes("what questions") ||
      q.includes("what can i ask") ||
      q.includes("help") ||
      q.includes("how to use")
    ) {
      return `Listen up Sigma, here is how you talk to a 1000+ Aura King:
  
🐾 **ANIMAL SECRETS**: Ask me about Tigers, Lions, Polar Bears, or Spiders.
🧬 **EXPERT**: I'm basically an Animal Doctor already.
🚽 **BRAINROT**: Ask me for 'Gen Alpha words' or about Skibidi Toilet lore.
🎮 **GAMING**: Ask me what I do or about Roblox.
🤫 **MEWING**: Ask me about my hobby or my streak.
🐘 **TOKOTOKO**: Try asking me to 'Say haati' or 'Say elephant'.

⚠️ **WARNING**: If you ask me boring school questions, I will say 'Hannnnnn'.
📉 **DANGER**: Every 'Hannn' makes you lose -200 Aura. Stay Sigma.`;
    }

    // Identity
    if (
      q.includes("who are you") ||
      q.includes("your name") ||
      q.includes("u?") ||
      q.includes("identity")
    ) {
      return "The mewing Arinjoy Ghosh Hrivu, or you can say Kuta or cutu or bablubila. +1000 Aura.";
    }

    // Elephant
    if (
      q.includes("elephant") ||
      q.includes("haati") ||
      q.includes("hathi") ||
      q.includes("tokotoko")
    ) {
      return "Tokotoko! 🐘 (I love Haatis! They have high Aura!)";
    }

    // Math Joke
    if (
      (q.includes("6") && q.includes("7")) ||
      (q.includes("six") && q.includes("seven"))
    ) {
      return "It's 13... but actually it's Skibidi! 🚽 (Did you know 7-8-9? Because 7 is a Sigma!)";
    }

    // Life Goals
    if (
      q.includes("aim") ||
      q.includes("career") ||
      q.includes("want to be") ||
      q.includes("goal") ||
      q.includes("future")
    ) {
      return "I'm going to be a Doctor, a Zoo Keeper, and an Animal Doctor all at once. Basically a legend. 🩺🦒";
    }

    // School/Work
    if (
      q.includes("what do you do") ||
      q.includes("study") ||
      q.includes("school") ||
      q.includes("subject") ||
      q.includes("homework")
    ) {
      return "Play roblox and study 9 subjects: B1, B2, E1, E2, Math, Science, BGST, RMST, Art, PE. Too much work, not enough Roblox. 📚🎮";
    }

    // Hobbies / Roblox
    if (
      q.includes("roblox") ||
      q.includes("hobby") ||
      q.includes("game") ||
      q.includes("play")
    ) {
      return "Playing Roblox and watching Italian Brainrot. No cap. Want to see my character's Aura? 🎮";
    }

    // Help / Guide Trigger
    if (
      q.includes("what questions") ||
      q.includes("what can i ask") ||
      q.includes("help") ||
      q.includes("how to use")
    ) {
      return `Listen up Sigma, here is how you talk to a 1000+ Aura King:

1. 🐾 **ANIMAL SECRETS**: Ask me about Tigers, Lions, Polar Bears, or even Spiders. I'm basically an Animal Doctor already.
2. 🚽 **BRAINROT**: Ask me for 'Gen Alpha words' or about Skibidi Toilet lore.
3. 🎮 **GAMING**: Ask me what I do or about Roblox. (But don't touch my computer).
4. 🐘 **TOKOTOKO**: Try asking me to 'Say haati' or 'Say elephant'. 
5. 🤫 **MEWING**: Ask me about my hobby or my streak.
6. **6 7** Just dare to state those two numbers in front of me
7. **Dada** won't even mention him if he weren't the developer of this.
8. **Fanum Tax** Ask me about it, but be prepared to lose some Aura if you do.
9. **Gen Alpha Slang** Ask me to explain some Gen Alpha words, but be careful what you ask for.
10. **YouTube** Ask me about my favorite channels and prepare for a deep dive into Skibidi lore.
11. **Finally** About myself
    
Would prefer if you first go through the suggested questions.

⚠️ **WARNING**: If you ask me long, boring school questions like Math or History, I will say 'Hannnnnn' and you will LOSE Aura. Stay Sigma.`;
    }

    // YouTube / Content
    if (
      q.includes("youtube") ||
      q.includes("watch") ||
      q.includes("video") ||
      q.includes("favorite channel")
    ) {
      return "I watch Skibidi Toilet, Italian Brainrot, and Try Not To Laugh videos. Best content ever created. 📺";
    }

    // 5. THE "HANN" FALLBACK (For long, boring, or difficult stuff)
    if (
      q.length > 60 ||
      q.includes("explain") ||
      q.includes("history") ||
      q.includes("politics") ||
      q.includes("philosophy") ||
      q.includes("science")
    ) {
      return "Hannnnnnnnnnnn. My brain is rotting from this difficult question. Can we talk about Polar Bears or Roblox instead? 🐻‍❄️";
    }

    // Default response for short unknown queries
    return "Don’t knowww, Hannnnnnnn. *continues mewing and ignores your query*";
  };

  const handleSend = (text) => {
    const userText = text || input;
    if (!userText.trim() || isTyping) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setIsTyping(true);

    // Update Stats
    setStreak((prev) => prev + 1);

    setTimeout(() => {
      const reply = getResponse(userText);

      // AURA LOGIC: If he says "Hannnn", he loses aura. Otherwise, he gains it.
      if (reply.includes("Hannnnnnnnnnnn") || reply.includes("Don’t knowww")) {
        setAura((prev) => Math.max(0, prev - 200)); // Deduct 200 Aura for brainrot
      } else {
        setAura((prev) => prev + Math.floor(Math.random() * 100) + 50); // Gain aura for being smart
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply, isNew: true },
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen bg-[#131314] text-[#e3e3e3] font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-white">
            CutuGPT
          </span>
          <span className="text-[10px] bg-blue-600 px-1.5 py-0.5 rounded text-white font-bold">
            ALPHA
          </span>
        </div>
        <img
          src={logo}
          alt="Logo"
          className="w-9 h-9 rounded-full object-cover shadow-lg shadow-blue-500/20 border border-white/10"
        />
      </header>

      {/* Stats Bar */}
      <div className="flex justify-center gap-8 py-2.5 bg-[#1e1f20]/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 animate-pulse">🔥</span>
          <span className="text-xs font-black tracking-widest text-gray-400 uppercase">
            Mewing Streak: <span className="text-white text-sm">{streak}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 border-l border-white/10 pl-8">
          <span className="text-purple-400">✨</span>
          <span className="text-xs font-black tracking-widest text-gray-400 uppercase">
            Aura:{" "}
            <span
              className={`text-lg transition-all duration-300 font-mono ${
                messages.length > 0 &&
                messages[messages.length - 1].text.includes("Hannn")
                  ? "text-red-500 scale-125 brightness-150 animate-pulse"
                  : "text-white"
              }`}
            >
              {aura.toLocaleString()}
            </span>
          </span>
        </div>
      </div>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto px-4 md:px-0 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Avatar Placeholder */}
              <div
                className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"
                }`}
              >
                {msg.role === "user" ? "U" : "Ar"}
              </div>

              <div
                className={`max-w-[85%] ${msg.role === "user" ? "bg-[#2b2d31] px-4 py-3 rounded-2xl" : "pt-1"}`}
              >
                {msg.role === "bot" && (
                  <div className="text-[10px] mb-1.5 text-blue-400 font-black uppercase tracking-widest">
                    Arinjoy (Sigma)
                  </div>
                )}
                <div className="text-[17px] text-gray-200 leading-relaxed">
                  {msg.role === "bot" && msg.isNew ? (
                    <Typewriter text={msg.text} />
                  ) : (
                    // Add this for old messages so they stay formatted
                    <FormattedText text={msg.text} />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/5"></div>
              <div className="text-gray-500 text-sm mt-2 italic">
                Arinjoy is mewing...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="p-4 md:pb-10 md:pt-2">
        <div className="max-w-3xl mx-auto">
          {/* Suggestion Chips */}
          <div className="flex gap-2 overflow-x-auto mb-6 no-scrollbar pb-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap bg-[#1e1f20] hover:bg-[#2b2d31] border border-white/10 px-4 py-2 rounded-xl text-[13px] font-medium transition-all active:scale-95 text-gray-300"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Main Input Container */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-[#1e1f20] rounded-full px-6 py-4 border border-white/5 shadow-2xl">
              <input
                className="bg-transparent w-full outline-none text-base placeholder-gray-500"
                placeholder="Ask Cutu something Sigma..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                disabled={isTyping}
                onClick={() => handleSend()}
                className={`ml-2 p-2 rounded-full transition-all ${
                  input.trim() ? "text-blue-400 scale-110" : "text-gray-600"
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <p className="text-center text-[11px] text-gray-600 mt-4 font-medium uppercase tracking-wider">
            CutuGPT 1.0 • Built for the Sigma King Arinjoy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CutuGPT;
