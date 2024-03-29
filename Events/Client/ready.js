const {ActivityType} = require('discord.js')
const mongoose = require('mongoose')
const config = require('./../../config.json')
require('colors')
module.exports = {
    name:'ready',
    once:true,
    async execute(client){
        mongoose.set('strictQuery', true)
        await mongoose.connect(config.dataBaseURL || ''),{
            keepAlive:true,
        }

        if(mongoose.connect){
            console.log('[MONGO DB] Esta conectado correctamente'.red);
        }else
        console.log(`El ${client.user.username} esta online`);

        function updatePresence(){
            const activities = [
                {name:'Discord de BaldurMU', type:ActivityType.Watching},
                {name:'Baldur MU Online', type:ActivityType.Playing},
                {name:'Baldur MU Online', type:ActivityType.Playing},
            ];

            const activity = activities[Math.floor(Math.random()* activities.length)];

            client.user.setActivity(activity.name, {type:activity.type});
        }

        setInterval(updatePresence, 10000) // 10 Segundos
    }
};
