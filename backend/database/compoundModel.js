const compoundModel = (connection, Sequelize)=>{
    const Compound = connection.define("compound", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CompoundName: {
            type: Sequelize.STRING
        },
        CompoundDescription: {
            type: Sequelize.STRING
        },
        strImageSource:{
            type: Sequelize.STRING
        },
        strImageAttribution:{
            type: Sequelize.STRING
        },              
        dateModified: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false
    });

    return Compound; 
}
module.exports = compoundModel;