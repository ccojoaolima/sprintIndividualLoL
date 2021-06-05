var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;
var env = process.env.NODE_ENV || 'development';

/* Recuperar as últimas N leituras */
router.get('/ultimas/:idcaminhao', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 7 está bom?
	const limite_linhas = 7;

	var idcaminhao = req.params.idcaminhao;

	console.log(`Recuperando as ultimas ${limite_linhas} leituras`);
	
	let instrucaoSql = "";

	if (env == 'dev') {
		// abaixo, escreva o select de dados para o Workbench
		instrucaoSql = `select 
		temperatura, 
		umidade, 
		momento,
		DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
		from leitura
		where fkcaminhao = ${idcaminhao}
		order by id desc limit ${limite_linhas}`;
	} else if (env == 'production') {
		// abaixo, escreva o select de dados para o SQL Server
		instrucaoSql = `select top ${limite_linhas} 
		temperatura, 
		umidade, 
		momento,
		FORMAT(momento,'HH:mm:ss') as momento_grafico
		from leitura
		where fkcaminhao = ${idcaminhao}
		order by id desc`;
	} else {
		console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
	}
	
	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


router.get('/tempo-real/:idcaminhao', function(req, res, next) {
	console.log('Recuperando caminhões');
	
	//var idcaminhao = req.body.idcaminhao; // depois de .body, use o nome (name) do campo em seu formulário de login
	var idcaminhao = req.params.idcaminhao;
	
	let instrucaoSql = "";
	
	if (env == 'dev') {
		// abaixo, escreva o select de dados para o Workbench
		instrucaoSql = `select temperatura, umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, fkcaminhao from leitura where fkcaminhao = ${idcaminhao} order by id desc limit 1`;
	} else if (env == 'production') {
		// abaixo, escreva o select de dados para o SQL Server
		instrucaoSql = `select top 1 temperatura, umidade, FORMAT(momento,'HH:mm:ss') as momento_grafico, fkcaminhao from leitura where fkcaminhao = ${idcaminhao} order by id desc`;
	} else {
		console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
	}
	
	console.log(instrucaoSql);
	
	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
	.then(resultado => {
		res.json(resultado[0]);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as qtde. de usuarios cadastrados totais`);

	const instrucaoSql = `select count(idUsuario) as 'todosUsers' from usuario; `;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});
router.get('/estatisticas2', function (req, res, next) {
	
	console.log(`Recuperando a qtde. de jogadores de teemo`);

	const instrucaoSql = ` select count(idUsuario) as 'jogadoresDeTeemo' from usuario where fkCampeao1 = 38; `;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});

router.get('/recentes', function (req, res, next) {
	
	console.log(`Recuperando os 3 mais recentes cadastros`);

	const instrucaoSql = `SELECT nomeInvocador as 'ultimosCad' FROM usuario ORDER BY idUsuario DESC LIMIT 3;`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});

router.get('/campeaoPopular', function (req, res, next) {
	
 console.log(`Recuperando os Campeao mais popular`);

	const instrucaoSql =  `select fkCampeao1,count(*) as 'nroMains' from usuario group by fkCampeao1 limiT 1;`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});

router.get('/graficosStats', function (req, res, next) {
	
	console.log(`Recuperando graficosStats`);
   
	   const instrucaoSql =  `select(select count(verificaOtp) from usuario where verificaOtp = 's' ) as 'otp', count(idUsuario) as 'totalUsers' from usuario;`;
					   
   
	   sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		   .then(resultado => {
			   res.json(resultado[0]);
		   }).catch(erro => {
			   console.error(erro);
			   res.status(500).send(erro.message);
		   });
	 
   });




module.exports = router;
