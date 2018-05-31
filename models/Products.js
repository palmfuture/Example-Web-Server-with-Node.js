module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        description: {
            field: 'description',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
            indexes: [
                {
                    fields: ['user_id']
                }
            ]
        }
    );
}