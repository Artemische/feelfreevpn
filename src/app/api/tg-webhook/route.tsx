import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');

// Ответ на /start
bot.start(async (ctx) => {
  await ctx.reply('👋 Добро пожаловать в feelFree VPN!\nНажмите "Получить VPN", чтобы начать.');
  await ctx.reply('Выберите действие:', {
    reply_markup: {
      keyboard: [
        ['✈️ Получить VPN'],
        ['💰 Проверить баланс'],
        ['💳 Оплата'],
      ],
      resize_keyboard: true,
      one_time_keyboard: false,
    },
  });
});

// Обработка любых текстов
bot.on('text', async (ctx) => {
  await ctx.reply(`Вы сказали: ${ctx.message.text}`);
});

// Нужно для корректной работы с bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Webhook endpoint
export async function POST(request: Request) {
  const body = await request.json();

  try {
    await bot.handleUpdate(body);
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error processing webhook', { status: 500 });
  }
  return new Response("ok", { status: 200 });
}

export async function GET() {
  return new Response("Webhook route is working!", { status: 200 });
}