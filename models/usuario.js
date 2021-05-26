	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeInvocador: {
			field: 'nomeInvocador',
			type: DataTypes.STRING,
			allowNull: false
		},
		/*dataCadastro: {
			field: 'dataCadastro',
			type: DataTypes.DATE,
			allowNull: false
		}*/
		verificaOtp: {
			field: 'verificaOtp',
			type: DataTypes.STRING,
			allowNull: false
		},
		sexo: {
			field: 'sexo',
			type: DataTypes.STRING,
			allowNull: false
		},
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},	
		maestria1: {
			field: 'maestriaCampeao1',
			type: DataTypes.STRING,
			allowNull: false
		},
		maestria2: {
			field: 'maestriaCampeao2',
			type: DataTypes.STRING,
			allowNull: false
		},
		maestria3: {
			field: 'maestriaCampeao3',
			type: DataTypes.STRING,
			allowNull: false
		},
		elo: {
			field: 'eloUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		campeao1: {
			field: 'fkCampeao1',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		campeao2: {
			field: 'fkCampeao2',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		campeao3: {
			field: 'fkCampeao3',
			type: DataTypes.INTEGER,
			allowNull: false
		},

	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
