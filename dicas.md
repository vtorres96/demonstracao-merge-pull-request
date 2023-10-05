Integrante iniciando no projeto

1 - clonar o projeto
2 - executar o comando `npm install`
3 - preencher o arquivo `.env` com as credenciais (não precisa vocês fazerem essa etapa)
4 - criar branch com seu nome e desenvolver suas demandas

Conflito - Um código que existe no repositório remoto (plataforma do github / servidores do github), porém, ele não está presente, na nossa branch em que estamos no momento atual. Ou seja, vamos idealizar um cenário:

Viteira estará na branch Viteira
Leo estará na branch Leo
Luan estará na branch Luan

Sendo assim, se os integrantes codarem no mesmo arquivo e dentro deste arquivo, utilizarem as mesmas linhas, ocorrerá o conflito.
Mas, quando o conflito ocorrerá ?

Imagine que Leo finalizou sua tarefa e fez a PR, consequentemente
mergearemos a PR do Leo por ter sido o primeiro a entregar a sua demanda, caso, Luan ou Viteira entreguem depois, vão se deparar com o conflito, pois, a branch master/main estará "a frente" da nossa, tanto da branch de Luan quanto da minha branch.

Resolução de Conflitos
1 - Criar a Pull Request
2 - Verificar se houveram conflitos entre a versão de código da sua branch e a branch na qual está buscando efetuar o MERGE
3 - Se não existir conflitos, basta Mergear.
4 - Se houver conflitos, o recomendado é executar o comando:
Devemos nos basear em dar `git pull` na branch em qual estamos enviando nossa PR para atualizá-la, ou seja.
Se possuo uma branch leo que criei uma PR para a branch master,
caso ocorra conflito, deverei acessar a branch leo e buscar atualizá-la, com base na versão da branch master

```
git pull origin nome_da_branch_que_deseja_mergear_sua_PR
```
5 - Utilizar o Git Lens, dentro do VS Code para resolver os conflitos, utilizando a ferramenta a seu favor para: aceitar apenas seu código, aceitar apenas o código que está atualmente na branch que desejamos mergear, unificar os códigos aceitando as alterações de ambos.