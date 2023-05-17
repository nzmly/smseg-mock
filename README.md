# SMSEG Api Mock

Do not want to hit the real API but still want to make sure your code works? Use this mock!

## Installation

```bash
$ git clone https://github.com/nzmly/smseg-mock.git
$ cd smseg-mock
$ docker-compose up

# you should see the request body in the console
```


## Usage

```bash
curl --location 'http://localhost:4445/sms/api/json/' \
--header 'Content-Type: application/json' \
--data '{
    "userName": "Fakeusername",
    "password": "Fakepassword",
    "sendername": "FakeSender",
    "mobiles": "201010101010",
    "message": "your message here"
}'
```

Then check the console to see the request body

