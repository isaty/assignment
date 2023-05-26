
const compoundModel = require('./compoundModel');
const Sequelize = require('sequelize');

class Database{
    
    static connection;
    static compound;

    static async createConnection(){
        Database.connection = new Sequelize(process.env.database, process.env.user, process.env.password, {
            host: process.env.host,
            dialect: process.env.dialect,
            logging: false
        });
        try{
            await Database.connection.authenticate();
            console.log("Datbase Connection successful");
            Database.compound = compoundModel(Database.connection,Sequelize); 
            await Database.connection.sync();
        }catch(e){
            console.log("Connection failed",e);
        }
    }

    async getCompound(id){
        try{
            const compound = await Database.compound.findOne({where:{id:id}});
            return compound;
        }catch(e){
            console.log("Error occurred while getting compound",e);
        }
    }
    
    async getAllCompound(option){
        try{
            const compound = await Database.compound.findAndCountAll(option);
            return compound;
        }catch(e){
            console.log("Error occurred while getting compound",e);
        }
    }

    async createCompound(body){
        try{
            const compound = await Database.compound.create(body);
            return compound;
        }catch(e){
            console.log("Error occurred while creating compound",e);
        }
    }

    async updateCompound(id,body){
        try{
            const compound = await Database.compound.update(body,{where:{id:id}});
            return compound;
        }catch(e){
            console.log("Error occurred while updating compound",e);
        }
    }

    async deleteCompound(id){
        try{
            const compound = await Database.compound.destroy({where:{id:id}});
            return compound;
        }catch(e){
            console.log("Error occurred while deleting compound",e);
        }
    }
}

module.exports = Database;