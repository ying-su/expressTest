create table test.user
	(
		id int unsigned not null auto_increment primary key,
		username char(20) not null comment'用户名',
		password char(20) not null comment'密码',
		phone char(11) not null comment'手机号绑定'
	)