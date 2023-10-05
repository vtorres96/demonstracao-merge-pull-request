create table usuarios (
	id serial primary key not null,
	nome text,
	email text UNIQUE,
	senha text
);