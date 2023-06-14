FROM python:3.9

# Needed for mariaDB connector for python
RUN apt-get update \
    && apt-get -yy install libmariadb-dev

RUN apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 0xcbcb082a1bb943db
RUN curl -LsS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | bash

RUN apt-get install libmariadb3 -y
RUN apt-get install libmariadb-dev -y

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8082"]