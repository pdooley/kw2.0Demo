source ./env.sh

docker images "*"$KW_PROJ"*"
printf "\n"

docker ps --filter "name="$KW_PROJ --filter status=exited --filter status=running
printf "\n"

docker volume ls --filter "name="$KW_PROJ
