# ADR 0001: uso do GitHub Actions para Integração Contínua 

## Contexto 
O projeto precisa rodar testes automaticamente a cada Pull Request.
Existe varias ferramentas de CI no mercado (Jenkins, CirrclesCI, GitHub Actions).

## Decisão 
Vamos usar o GitHub Actions. 

## Motivo
Já hospedamos o código no GitHub, então não é preciso com outra plataforma. É gratuito
para reositórios públicos e a configuração fica no 
proprio, versionada junto com o código.

## Consequências 
Ficamos dependentes do ecossistema GitHub. Se um dia migrarmos de 
plataforma de hospedagem, o pipeline de CI precisará ser recriada. 