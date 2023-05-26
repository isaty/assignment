const database = require('../database/database');

class compoundService{

    databaseConnection;
    constructor(){
        this.databaseConnection = new database();
    }
    /**
     * Get compound
     */
     async getCompound(compoundId){
        try{
            console.log("Starting to fetch Compound");
            const compound =  await this.databaseConnection.getCompound(compoundId);
            console.log("Compound fetchd succesfully");
            return compound;
        }catch(e){
            console.log("Error Occurred while getting compound",e);
            throw e;
        }
    }

    /**
     * Get all compound
     */
    async getAllCompound(option){
        try{
            console.log("Starting to fetch Compound");
            const compound =  await this.databaseConnection.getAllCompound(option);
            console.log("Compounds fetched succesfully");
            return compound;
        }catch(e){
            console.log("Error Occurred while getting compound",e);
            throw e;
        }
    }
    /**
     * Create a compound
     */
    async createCompound(requestBody){
        try{
            console.log("Starting to create compound");
            const compound = await this.databaseConnection.createCompound(requestBody);
            console.log("Compound created successfully");
            return compound;
        }catch(e){
            console.log("Error Occurred while creating compound",e);
            throw e;
        }
    }

    /**
     * Update a compound
     */
    async updateCompound(compoundId,requestBody){
        try{
            console.log("Starting to fetch Compound");
            const record = await this.databaseConnection.getCompound(compoundId);            
            if(!record){
                throw {"details":"compound not found"};
            }
            console.log("Compound fetched successfully");
            
            console.log("Starting to update Compound");
            const compound = await this.databaseConnection.updateCompound(compoundId,requestBody);
            console.log("Compound updated successfully");
            return compound;
        }catch(e){
            console.log("Error Occurred while updating compound",e);
            throw e;
        }
    }

    /**
     * Delete a compound
     */
    async deleteCompound(compoundId){
        try{
            console.log("Starting to deleted compound");
            await this.databaseConnection.deleteCompound(compoundId);
            console.log("compound deleted successfully");
            return;
        }catch(e){
            console.log("Error Occurred while deleting compound",e);
            throw e;
        }
    }
}

module.exports = new compoundService();