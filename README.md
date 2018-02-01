# Readable API Server

This App was created to provide posted jobs available.

## Start Application

To get started Application right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`

### API Endpoint

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `GET /posts/:id` | Get the details of a single post. | |