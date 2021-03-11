# Service Deploy Link

[https://ibnutriyuono-users-service.herokuapp.com](https://ibnutriyuono-users-service.herokuapp.com)

# Orchestrator Deploy Link

[https://ibnutriyuono-orchestrator.herokuapp.com/](https://ibnutriyuono-orchestrator.herokuapp.com/)

# API DOCUMENTATION

## Endpoint

- **`POST /access-token`**
- **`GET /users`**
- **`GET /users/{user_id}`**
- **`GET /users/account/{account_number}`**
- **`GET /users/identities/{identity_number}`**
- **`POST /users`**
- **`PUT /users/{user_id}`**
- **`DELETE /users/{user_id}`**

## **POST CREATE ACCESS TOKEN**

---

- **URL**

  **`/access-token`**

- **Method**

  `POST`

- **Success Response:** <br />
  **Code:** 200 SUCCESS<br />
  **Content:**

  ```json
  {
    "access_token": "<access_token>"
  }
  ```

  **Code:** 500 INTERNAL SERVER ERROR<br />
  **Content:**

  ```json
  {
    "status": "Error",
    "error": "Internal server error."
  }
  ```

## **GET USERS**

---

- **URL**

  **`/users`**

- **Method**

  `GET`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Success Response:** <br />
  **Code:** 200 SUCCESS<br />
  **Content:**

  ```json
  [
    {
      "_id": "<user's id>",
      "userName": "<user's username>",
      "accountNumber": "<user's account nuber>",
      "emailAddress": "<user's email address>",
      "identityNumber": "<user's identity number>"
    }
  ]
  ```

- **Failed Response:** <br />
  **Code:** 403 FORBIDDEN<br />
  **Content:**
  ```json
  {
    "message": "Forbidden."
  }
  ```
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**
  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```
  <br/>

## **GET USER BY ID**

---

- **URL**

  **`/users/<user id>`**

- **Method**

  `GET`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Success Response:** <br />
  **Code:** 200 SUCCESS<br />
  **Content:**

  ```json
  {
    "_id": "<user's id>",
    "userName": "<user's name>",
    "accountNumber": "<user's account number>",
    "emailAddress": "<user's email>",
    "identityNumber": "<user's identity number>"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 FORBIDDEN<br />
  **Content:**
  ```json
  {
    "message": "Forbidden."
  }
  ```
  **Code:** 404 DATA NOT FOUND <br />
  **Content:**
  ```json
  {
    "message": "Sorry. Data not found."
  }
  ```
  **Code:** 403 FORBIDDEN <br />
  **Content:**
  ```json
  {
    "message": "Sorry. The user id is invalid.."
  }
  ```
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**
  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```
    <br/>

## **GET USER BY ACCOUNT NUMBER**

---

- **URL**

  **`/users/accounts/<account number>`**

- **Method**

  `GET`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Success Response:** <br />
  **Code:** 200 SUCCESS<br />
  **Content:**

  ```json
  {
    "_id": "<user's id>",
    "userName": "<user's name>",
    "accountNumber": "<user's account number>",
    "emailAddress": "<user's email>",
    "identityNumber": "<user's identity number>"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 FORBIDDEN<br />
  **Content:**
  ```json
  {
    "message": "Forbidden."
  }
  ```
  **Code:** 404 DATA NOT FOUND <br />
  **Content:**
  ```json
  {
    "message": "Sorry. Data not found."
  }
  ```
  **Code:** 403 FORBIDDEN <br />
  **Content:**
  ```json
  {
    "message": "Sorry. The user id is invalid.."
  }
  ```
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**
  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```
    <br/>

## **GET USER BY IDENTITY NUMBER**

---

- **URL**

  **`/users/identities/<account number>`**

- **Method**

  `GET`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Success Response:** <br />
  **Code:** 200 SUCCESS<br />
  **Content:**

  ```json
  {
    "_id": "<user's id>",
    "userName": "<user's name>",
    "accountNumber": "<user's account number>",
    "emailAddress": "<user's email>",
    "identityNumber": "<user's identity number>"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 FORBIDDEN<br />
  **Content:**
  ```json
  {
    "message": "Forbidden."
  }
  ```
  **Code:** 404 DATA NOT FOUND <br />
  **Content:**
  ```json
  {
    "message": "Sorry. Data not found."
  }
  ```
  **Code:** 403 FORBIDDEN <br />
  **Content:**
  ```json
  {
    "message": "Sorry. The user id is invalid.."
  }
  ```
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**
  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```
    <br/>

## **POST CREATE USER**

---

- **URL**

  **`/users`**

- **Method**

  `POST`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Request Body**

  ```json
  {
    "userName": "ibnutriyuono",
    "accountNumber": 123123123123,
    "emailAddress": "ibnutriyuono23@gmail.com",
    "identityNumber": 1231231231213132
  }
  ```

- **Success Response:** <br />
  **Code:** 201 CREATED<br />
  **Content:**

  ```json
  {
    "userName": "<user's name>",
    "accountNumber": "<user's account number>",
    "emailAddress": "<user's email>",
    "identityNumber": "<user's identity number>",
    "_id": "<user's id>"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**

  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```

  **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```json
  {
    "message": "Internal server error."
  }
  ```

  <br />

## **PUT EDIT USER BY ID**

---

- **URL**

  **`/users`**

- **Method**

  `PUT`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Request Body**

  ```json
  {
    "userName": "ibnutriyuono",
    "accountNumber": 123123123123,
    "emailAddress": "ibnutriyuono23@gmail.com",
    "identityNumber": 1231231231213132
  }
  ```

- **Success Response:** <br />
  **Code:** 201 CREATED<br />
  **Content:**

  ```json
  {
    "message": "Success edit data"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**

  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```

  **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```json
  {
    "message": "Internal server error."
  }
  ```

  <br />

## **PUT EDIT USER BY ID**

---

- **URL**

  **`/users`**

- **Method**

  `PUT`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Request Body**

  ```json
  {
    "userName": "ibnutriyuono",
    "accountNumber": 123123123123,
    "emailAddress": "ibnutriyuono23@gmail.com",
    "identityNumber": 1231231231213132
  }
  ```

- **Success Response:** <br />
  **Code:** 201 CREATED<br />
  **Content:**

  ```json
  {
    "message": "Success edit data"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**

  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```

  **Code:** 404 DATA NOT FOUND <br />
  **Content:**

  ```json
  {
    "message": "Sorry. Data not found."
  }
  ```

  **Code:** 403 FORBIDDEN <br />
  **Content:**

  ```json
  {
    "message": "Sorry. The user id is invalid.."
  }
  ```

  **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```json
  {
    "message": "Internal server error."
  }
  ```

  <br />

## **DELETE USER BY ID**

---

- **URL**

  **`/users`**

- **Method**

  `DELETE`

- **Request Headers**

  ```json
  {
    "access_token": "<your access_token>"
  }
  ```

- **Success Response:** <br />
  **Code:** 201 CREATED<br />
  **Content:**

  ```json
  {
    "message": "Success delete data"
  }
  ```

- **Failed Response:** <br />
  **Code:** 403 INVALID ACCESS TOKEN <br />
  **Content:**

  ```json
  {
    "message": "Forbidden. Invalid Token."
  }
  ```

  **Code:** 404 DATA NOT FOUND <br />
  **Content:**

  ```json
  {
    "message": "Sorry. Data not found."
  }
  ```

  **Code:** 403 FORBIDDEN <br />
  **Content:**

  ```json
  {
    "message": "Sorry. The user id is invalid.."
  }
  ```

  **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```json
  {
    "message": "Internal server error."
  }
  ```

  <br />
