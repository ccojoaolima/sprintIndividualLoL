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








create table discussao(
idDiscussao int primary key auto_increment,
nomeTopico varchar(30),
dataDisc date,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario));


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


select * from usuario;
select * from campeao;
select * from discussao;

drop database dbIlha;