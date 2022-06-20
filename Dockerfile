FROM img_teppen_base

COPY ./e2e/ ./e2e/
COPY ./src/ ./src/

COPY env.sh .
COPY env_proj.sh .
COPY debug.sh .
