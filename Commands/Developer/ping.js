const { CommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('jaja')
  .setDescription('jeje'),
  async execute(interaction,client) {
    // Replace with your guild and member IDs
    const guildId = '1175212384323907645';
    const memberId = '334734398588977163';

    // Get the guild object
    const guild = interaction.client.guilds.cache.get(guildId);
    if (!guild) {
      return interaction.reply({
        content: 'Failed to find guild.',
        ephemeral: true,
      });
    }

    // Get the member object
    const member = guild.members.cache.get(memberId);
    if (!member) {
      return interaction.reply({
        content: 'Failed to find member.',
        ephemeral: true,
      });
    }

    // Emit the guildMemberAdd event with the member object
    client.emit('guildMemberAdd', member);

    await interaction.reply({
      content: `Simulated guildMemberAdd event for ${member.user.tag}`,
      ephemeral: true,
    });
  },
};
