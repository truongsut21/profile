import { env } from '../config/env';

export const discordService = {
  /**
   * Sends a message payload containing user inquiry details to Discord channel via Webhook.
   * @param name The sender's name
   * @param email The sender's email
   * @param message The message text
   */
  async sendNotification(name: string, email: string, message: string): Promise<boolean> {
    try {
      const payload = {
        embeds: [
          {
            title: '📩 New Contact Inquiry — Do Van Truong Portfolio',
            color: 5814783, // Cinematic blue color accent
            fields: [
              {
                name: '👤 Name',
                value: name,
                inline: true,
              },
              {
                name: '✉️ Email',
                value: email,
                inline: true,
              },
              {
                name: '💬 Message',
                value: message,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const response = await fetch(env.HOOK_DISCORD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      return response.ok;
    } catch (error) {
      // Avoid console.log if possible or use standard logger. Since we are in client browser, standard console.error is acceptable for network fails.
      console.error('Failed to dispatch message to Discord Webhook:', error);
      return false;
    }
  },
};
