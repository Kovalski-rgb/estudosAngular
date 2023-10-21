# Angular
Repo pros projetos do angular que vão aparecer durante o curso

A branch main será o template, e cada branch nova será um outro projeto  
Na teoria o npm install em qualquer branch também serve para o template, e o install no template cobre a maioria dos pacotes nas outras branches, se não todos


Para cada branch do main:
 - mudar no main.yml, a linha 6 e 22, de main para a branch nova
 - Rodar esse comando no `find . \( -type d -name "src" -name ".git" -name ".github" -name "node_modules" -prune \) -o -type f -print0 | xargs -0 sed -i 's/template-main-branch/[NOME DO PROJETO]/g'`, onde [NOME DO PROJETO] é o nome do projeto 
