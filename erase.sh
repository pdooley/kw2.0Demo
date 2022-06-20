source ./env.sh

docker rm $KW_CONT_PROJ
docker rmi $KW_IMG_PROJ
docker rmi $KW_IMG_PROJ_BASE

