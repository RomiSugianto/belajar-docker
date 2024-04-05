FROM python:alpine

WORKDIR /app

RUN pip install --no-cache-dir flask

COPY ./app.py .

EXPOSE 5000

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host=0.0.0.0"]