-- MY SQL VERSION 8.0.29 --
SHOW MASTER STATUS; -- Log em uso
SHOW SLAVE STATUS; --
SHOW PROCESSLIST; -- Lista de instancias
PURGE BINARY LOGS TO 'DESKTOP-AQ06847-bin.000015'; -- Excluir binarios anteriores ao selecionado
ALTER TABLE nome_tabela CHANGE nome_antigo novo_nome INT; -- Alterar o nome de uma coluna
UPDATE nome_tabela SET nome_coluna = valor WHERE condicao; -- Atualizar valores de uma coluna