FROM python:alpine

WORKDIR /app

RUN pip install --no-cache-dir flask

COPY ./hello.py .

EXPOSE 5000

ENV FLASK_APP=hello.py

CMD ["flask", "run", "--host=0.0.0.0"]