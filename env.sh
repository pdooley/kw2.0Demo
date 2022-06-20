source ./env_proj.sh

export KW_HOST='0.0.0.0'
#printenv KW_HOST

export KW_DIR='/usr/local/kw/services'
#printenv KW_DIR

export KW_DIR_PROJ=$KW_DIR"/"$KW_PROJ
#printenv KW_DIR_PROJ

export KW_CONT_PROJ="cont_"$KW_PROJ
#printenv KW_CONT_PROJ

export KW_IMG_PROJ="img_"$KW_PROJ
#printenv KW_IMG_PROJ

export KW_IMG_PROJ_BASE=$KW_IMG_PROJ"_base"
#printenv KW_IMG_PROJ_BASE
