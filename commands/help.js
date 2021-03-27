exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '**MiseryMusic Help**',
            description: `
            __**Commands**__
            \`m!play\` | Play a song!
            \`m!pause\` | Pause music. 
            \`m!resume\` | Resume Music.
            \`m!np\` | Get current song's info.
            \`m!skip\` | Skip to next song.
            \`m!stop\` | Stop playing the music.
            \`m!volume\` | Adjust the current volume.
            \`m!queue\` | To see the full queue.


            `,
            footer: `Made by Misspoken#1122`
            color: 'BLACK'
        }
    })
}