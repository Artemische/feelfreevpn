import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const token = process.env.TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN || process.env.TOKEN;
if (!token) {
  throw new Error('Telegram bot token not found. Add TELEGRAM_BOT_TOKEN to .env.local');
}

const bot = new Telegraf(token);
const MENU_KEYBOARD = [
  ['✈️ Получить VPN'],
  ['💰 Проверить баланс', '💳 Оплата'],
];

// Ответ на /start
bot.start(async (ctx) => {
  await ctx.reply('👋 Добро пожаловать в feelFree VPN!\nНажмите "Получить VPN", чтобы начать.');
  await ctx.reply('Выберите действие:', {
    reply_markup: {
      keyboard: MENU_KEYBOARD,
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  });
});

// Обработка любых текстов
// bot.on('text', async (ctx) => {
//   await ctx.reply(`Вы сказали: ${ctx.message.text}`);
// });

bot.command('menu', async (ctx) => {
  await ctx.reply('Выберите действие:', {
    reply_markup: {
      keyboard: MENU_KEYBOARD,
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  });
});

bot.hears('✈️ Получить VPN', async (ctx) => {
  ctx.reply('Выберите местоположение сервера:', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '🇵🇱 Poland', callback_data: 'select_server:poland' },
          { text: '🇩🇪 Germany', callback_data: 'select_server:germany' },
        ],
        [
          { text: '🇺🇸 USA', callback_data: 'select_server:usa' },
          { text: '🇨🇦 Canada', callback_data: 'select_server:canada' },
        ]
      ],
    },
  });
});

bot.action(/select_server:(.+)/, async (ctx) => {
  const server = ctx.match[1];
  // Здесь можно добавить логику для получения VPN для выбранного сервера
  await ctx.answerCbQuery(`Вы выбрали сервер: ${server}`);
  await ctx.reply(`Вы успешно подключились к VPN серверу в ${server.toUpperCase()}.`);
});

// Нужно для корректной работы с bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

bot.launch().then(() => {
  console.log('🤖 Бот запущен локально...');
});