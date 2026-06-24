import { useState, useRef, useEffect } from "react";
import hulkLogo from "../../assets/images/hulkimage.jpg";

const botResponses = {
  greetings: {
    patterns: ["hi", "hello", "hey", "hii", "hola", "namaste", "good morning", "good evening"],
    response: "Hey there! 💪 Welcome to THE HULK Gym. How can I help you today? You can ask me about:\n• Membership plans\n• Gym timings\n• Trainers\n• Facilities\n• Location & contact"
  },
  membership: {
    patterns: ["membership", "plans", "pricing", "price", "cost", "fee", "join", "register", "subscribe"],
    response: "We have 3 awesome plans:\n\n💳 **Basic** — ₹1,499/mo (Gym access + locker)\n⭐ **Pro** — ₹2,999/mo (+ Group classes + 2 PT sessions)\n👑 **Elite** — ₹4,999/mo (Unlimited everything + Steam room)\n\nWant to register? Visit our Register page!"
  },
  timings: {
    patterns: ["timing", "time", "hours", "open", "close", "schedule", "when"],
    response: "Our gym hours are:\n\n🕐 Mon–Sat: 5:00 AM – 11:00 PM\n🕐 Sunday: 7:00 AM – 4:00 PM\n\nWe're open 365 days a year! 🎉"
  },
  trainers: {
    patterns: ["trainer", "coach", "personal training", "pt", "instructor"],
    response: "We have 15+ certified trainers with 10+ years of experience! 🏆\n\nPersonal training is included in Pro & Elite plans. Basic members can add PT sessions at ₹500/session."
  },
  facilities: {
    patterns: ["facility", "locker", "shower", "steam", "parking", "wifi", "amenity", "supplement", "shop"],
    response: "Our facilities include:\n\n🚿 Premium locker rooms & showers\n♨️ Steam room (Elite members)\n🅿️ Free parking (50+ car slots)\n📶 Free high-speed Wi-Fi\n🥤 In-house nutrition bar & supplement shop"
  },
  location: {
    patterns: ["location", "address", "where", "map", "direction", "reach"],
    response: "📍 We're located at:\n74, New BEL Road, Bangalore, Karnataka, 560054, India\n\nEasily accessible by metro and bus! 🚇"
  },
  contact: {
    patterns: ["contact", "phone", "email", "call", "whatsapp", "reach"],
    response: "You can reach us through:\n\n📞 Phone/WhatsApp: +91 62659 35663\n✉️ Email: info@thehulkpremium.com\n\nOr visit our Contact page to send a message!"
  },
  trial: {
    patterns: ["trial", "free", "demo", "test", "try", "pass"],
    response: "Yes! We offer a FREE 1-day premium pass! 🎉\n\nJust register on our website or visit the front desk. No commitment needed!"
  },
  equipment: {
    patterns: ["equipment", "machine", "weight", "dumbbell", "treadmill", "rack"],
    response: "We've got world-class equipment:\n\n🏋️ Hammer Strength racks\n🏋️ Premium Olympic plates\n🚴 Advanced cardio machines\n⛓️ Functional training rigs\n🔥 Dedicated CrossFit zone"
  },
  classes: {
    patterns: ["class", "yoga", "zumba", "hiit", "spin", "crossfit", "group"],
    response: "We offer awesome group classes:\n\n🧘 Yoga\n🔥 HIIT\n💃 Zumba\n🚴 Spin\n💪 Functional Training\n⚡ CrossFit\n\nIncluded for Pro & Elite members!"
  },
  thanks: {
    patterns: ["thanks", "thank you", "bye", "goodbye", "ok", "okay"],
    response: "You're welcome! 😊 Feel free to ask anything else. Stay strong! 💪🔥"
  }
};

const findResponse = (input) => {
  const lower = input.toLowerCase().trim();

  for (const category of Object.values(botResponses)) {
    for (const pattern of category.patterns) {
      if (lower.includes(pattern)) {
        return category.response;
      }
    }
  }

  return "I'm not sure about that. 🤔 You can ask me about:\n• Membership plans & pricing\n• Gym timings\n• Trainers & coaching\n• Facilities\n• Location & contact\n• Free trial pass\n\nOr visit our Contact page to talk to a real human! 😄";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey! 👋 I'm Hulk Bot. Ask me anything about THE HULK Gym!",
      time: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input.trim(),
      time: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: findResponse(userMsg.text),
        time: new Date()
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className={`chatbot-toggle-wrapper ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <span className="chatbot-toggle-text">Chat with us</span>}
        <button
          className={`chatbot-toggle ${isOpen ? "open" : ""}`}
          aria-label="Toggle Chatbot"
        >
          {isOpen ? (
            "✕"
          ) : (
            <img src={hulkLogo} alt="Hulk Bot" className="chatbot-toggle-logo" />
          )}
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      {!isOpen && (
        <div className="whatsapp-float-wrapper">
          <span className="whatsapp-float-text">Contact on WhatsApp</span>
          <a
            href="https://wa.me/916265935663"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-btn"
            aria-label="Contact on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="whatsapp-icon">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436.002 9.861-4.42 9.864-9.861.002-2.637-1.03-5.115-2.903-6.99C16.36 1.879 13.882.849 11.24.849 5.8 2.378 1.378 6.801 1.378 12.241c0 1.54.417 3.041 1.21 4.382l-.994 3.635 3.731-.979zm11.517-5.64c-.326-.162-1.924-.951-2.222-1.06-.297-.11-.513-.162-.73.162-.216.325-.837 1.06-.1.222.18-.737.568-1.581.61-.173-.042-.347-.218-.429-.871-.786-2.502-1.034-2.224-1.026.08 0 .153.014.22.047.37.18.66.425.86.666c.2.242.062.77-.07 1.034-.133.266-.73 1.06-1.583 1.817-.666.59-1.227.873-1.878.873-.65 0-1.205-.29-1.638-.722-.433-.432-1.432-1.587-1.83-2.316-.398-.73-.043-1.125.318-1.482.325-.325.73-.87.975-1.173.244-.304.325-.52.488-.867.163-.348.082-.653-.04-.915-.122-.262-.73-1.817-.73-1.817c-.326-.78-.65-1.06-.975-1.06h-.65c-.217 0-.57.08-.867.407-.297.325-1.139 1.112-1.139 2.71 0 1.597 1.163 3.142 1.326 3.358.163.217 2.29 3.507 5.546 4.916.774.335 1.38.535 1.854.686.78.248 1.49.213 2.05.13.626-.093 1.924-.787 2.196-1.547.271-.76.271-1.41.19-1.547-.083-.137-.297-.218-.623-.38z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      )}

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">🤖</div>
            <div>
              <h4>Hulk Bot</h4>
              <span className="chatbot-status">● Online</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chatbot-msg ${msg.sender}`}>
              <div className="chatbot-msg-bubble">
                {msg.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
              <span className="chatbot-msg-time">{formatTime(msg.time)}</span>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-msg bot">
              <div className="chatbot-msg-bubble typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="chatbot-input"
          />
          <button type="submit" className="chatbot-send">➤</button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
