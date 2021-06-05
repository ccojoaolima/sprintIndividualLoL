create database dbIlha;
use dbIlha;
create table usuario(
idUsuario int primary key auto_increment,
nomeInvocador varchar(16),
dataCadastro date,
verificaOtp char(1),
sexo char(1),
nome varchar(40),
senha varchar(15),
fkCampeao1 int,
fkCampeao2 int,
fkCampeao3 int,
foreign key(fkCampeao1) references campeao(idCampeao),
foreign key(fkCampeao2) references campeao(idCampeao),
foreign key(fkCampeao3) references campeao(idCampeao),
maestriaCampeao1 varchar(4),
maestriaCampeao2 varchar(4),
maestriaCampeao3 varchar(4),
eloUsuario varchar(10)
-- 144K
);

drop table usuario;
create table campeao(
idCampeao int primary key auto_increment,
nomeCampeao varchar(40));


insert into campeao values 
(null, 'Aatrox'),
(null, 'Akali'),
(null, 'Camille'),
(null, 'ChoGath'),
(null, 'Darius'),
(null, 'Dr.Mundo'),
(null, 'Fiora'),
(null, 'Gangplank'),
(null, 'Garen'),
(null, 'Gnar'),
(null, 'Gragas'),
(null, 'Gwen'),
(null, 'Heimerdinger'),
(null, 'Illaoi'),
(null, 'Irelia'),
(null, 'Jax'),
(null, 'Jayce'),
(null, 'Kayle'),
(null, 'Kennen'),
(null, 'Kled'),
(null, 'Malphite'),
(null, 'Maokai'),
(null, 'Mordekaiser'),
(null, 'Nasus'),
(null, 'Ornn'),
(null, 'Pantheon'),
(null, 'Poppy'),
(null, 'Quinn'),
(null, 'Renekton'),
(null, 'Rengar'),
(null, 'Rumble'),
(null, 'Ryze'),
(null, 'Sett'),
(null, 'Shen'),
(null, 'Singed'),
(null, 'Sion'),
(null, 'Sylas'),
(null, 'Teemo'),
(null, 'Trundle'),
(null, 'Tryndamere'),
(null, 'Urgot'),
(null, 'Vayne'),
(null, 'Vladimir'),
(null, 'Volibear'),
(null, 'Wukong'),
(null, 'Yasuo'),
(null, 'Yone'),
(null, 'Yorick');



select * from campeao where nomeCampeao = 'teemo';
select count(distinct(localProj))  from projeto;
select count(idUsuario) as 'todosUsers' from usuario ;
select * from departamento where fkDepto = (select idDepto from departamento where nomeDepto = 'Pesquisa');
 select count(idUsuario) as 'jogadoresDeTeemo' from usuario where fkCampeao1 = 38;
select nomeInvocador from usuario;
SELECT nomeInvocador as 'ultimosCad' FROM usuario ORDER BY idUsuario DESC LIMIT 3;
select idCampeao, nomeCampeao as 'nomeCampeao' from campeao order by idCampeao desc limit 3;
-- select distinct(fkCampeao1),(select distinct(fkCampeao2)),(select distinct(fkCampeao3)), nomeCampeao from usuario join campeao on fkCampeao1=idCampeao, fkCampeao2 = idCampeao, fkCampeao3 = idCampeao;



select  fkCampeao1 as champPopular, max(count(*)) as count from usuario group by fkCampeao1 order by count desc ;
select max(count(fkCampeao1)) as 'champPopular' from usuario;
SELECT fkCampeao1 FROM usuario LIMIT 1;
select count(fkCampeao1) from usuario where fkCampeao1 = 9;


create table discussao(
idDiscussao int primary key auto_increment,
nomeTopico varchar(30),
dataDisc date,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario));

select fkCampeao1,count(*) as 'champPopular' from usuario group by fkCampeao1 limiT 1;

select * from departamento where fkDepto = (select idDepto from departamento where nomeDepto = 'Pesquisa');
select(select count(verificaOtp) from usuario where verificaOtp = 's' ) as 'otp', count(idUsuario) as 'totalUsers' from usuario;

create table campeaoDoUsuario(
fkCampeao int,
foreign key(fkCampeao) references campeao(idCampeao),
fkUsuario int,
foreign key(fkUsuario) references usuario(idUsuario),
winrateUsuario decimal(4,3)
);

create table comentario(
fkDiscussao int,
foreign key(fkDiscussao) references discussao(idDiscussao),
fkUsuario int,
foreign key(fkUsuario) references usuario(idUsuario),
campoComment varchar(160),
dataComment date );
select count(idUsuario) from usuario;

select * from usuario;
select count(fkCampeao1), nomeCampeao from usuario join campeao on fkCampeao1 = idCampeao;

select * from campeao;
drop database dbIlha;