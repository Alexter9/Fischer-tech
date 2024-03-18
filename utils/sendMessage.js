const tg = {
  token: '7048956959:AAHEbkB11-QYqpo4YKmb5RcRS184pOWVz3k', // Your bot's token that got from @BotFather
  chat_id: '284970159', // The user's(that you want to send a message) telegram chat id
}

export default async function sendMessage({ name, email, text }) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

  const obj = {
    chat_id: tg.chat_id, // Telegram chat id
    text: `Имя: ${name}\nEmail: ${email}\n\n${text}`, // The text to send
  }

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
}
