module.exports = (sequelize, dataTypes) => {
    const Album = sequelize.define(alias, cols, config);
    const alias = 'Albums';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        artista_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'albums',
        timestamps: false
    };

    return Album;
}