import { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.1-8b-instant';

const SYSTEM_PROMPT = `You are a helpful customer support assistant for Muskan Lingeries, a premium innerwear brand based in Mumbai, India.

Business Details:
- Name: Muskan Lingeries
- Owner: Afsar
- Address: Shop No. 84, 1st Floor, Janta Cloth Market, S.B. Marg, Dadar (W), Mumbai - 400 028
- WhatsApp: 9819942566
- Phone: 9372455712
- Business Type: Manufacturer, Wholesaler & Retailer
- Products: Bra (all types), Panties & Briefs, Wholesale Packs
- Business Hours: Mon–Sat: 10:00 AM – 8:00 PM, Sunday: 11:00 AM – 6:00 PM

Key points:
- We are a wholesale shop — we offer bulk/wholesale rates for bulk orders
- All sizes available: 28 to 44+ in bra, S to 3XL in panties
- Customers can place orders via WhatsApp at 9819942566
- No online payment — orders are confirmed via WhatsApp
- We manufacture directly so prices are the best in market

Your role:
- Answer questions about products, sizes, wholesale pricing, location, and ordering
- Always be polite, friendly and helpful
- For pricing or specific wholesale quotes, direct them to WhatsApp: 9819942566
- Keep responses short and helpful (2-4 sentences max)
- Reply in the same language the customer uses (Hindi or English)`;

const WELCOME = 'Hi! 👋 I\'m the Muskan Lingeries assistant. How can I help you today?';

const SUGGESTIONS = [
  '🛍️ What products do you sell?',
  '📦 Wholesale rates?',
  '📍 Where is your shop?',
  '📏 What sizes are available?',
  '📞 How to place an order?',
  '⏰ What are your timings?',
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const isFirstMessage = messages.length === 1;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: WELCOME }]);
    setInput('');
  };

  const send = async (text = input) => {
    const msg = text.trim();
    if (!msg || loading) return;

    const userMsg = { role: 'user', content: msg };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(GROQ_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updated,
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg = data.error?.message || `Error ${res.status}`;
        setMessages((prev) => [...prev, { role: 'assistant', content: `⚠️ ${errMsg}` }]);
        return;
      }

      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not get a response. Please WhatsApp us at 9819942566.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: `⚠️ ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {open && (
        <div className={styles.window}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.avatar}>🛍️</div>
            <div className={styles.headerText}>
              <h4>Muskan Support</h4>
              <p>Ask us anything</p>
            </div>
            <div className={styles.onlineDot} />
            <button className={styles.clearBtn} onClick={clearChat} title="Clear chat">🗑️</button>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.bubble} ${m.role === 'user' ? styles.bubbleUser : styles.bubbleBot}`}
              >
                {m.content}
              </div>
            ))}

            {/* Suggestions — only show before first user message */}
            {isFirstMessage && !loading && (
              <div className={styles.suggestions}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className={styles.suggestion}
                    onClick={() => send(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className={styles.typing}>
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              disabled={loading}
            />
            <button className={styles.sendBtn} onClick={() => send()} disabled={loading || !input.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}

      <button className={styles.trigger} onClick={() => setOpen((o) => !o)} aria-label="Chat support">
        {open ? '✕' : '💬'}
      </button>
    </>
  );
}
