---
title: How to choose a database
description: How to choose a database
layout: ../../layouts/CodeDrops.astro
lang: en
---

Theo’s video about Bd’s

[https://www.youtube.com/watch?v=cC6HFd1zcbo](https://www.youtube.com/watch?v=cC6HFd1zcbo)

- “An external things that stores data”
- Usually persisted data
- Usually accessible via API/standart client

## What are the TYPES of databases?

- SQL databases (SQLite, postgres, MySQL)
- Document databases (MongoBd, Firestore)
- No-SQL “relational” - Graph (Fauna, neo4j)
- K/V stores (Redis, Worker KV, ..)

Where do I host my database?

- Run it on a server yourself (AWS EC2, Railway, heroku)
  - Docker image that run tech database directly
- Managed
  - Provided/Autoscaled hosts on OSS tech (Planetscale, CockroachDB)
  - Proprietary infra/tech pairings (Fauna, WorkerKV)
  - “Boring” (Supabase)

## Database Spectrum

![Untitled](How%20to%20choose%20one%20af910b1b697541e58861ec74af9ee19a/Untitled.png)

People who cares much People who don’t cares much

## Please don’t use Mongo (unless you have a very specific reason)

Mongo is a DOCUMENT store, It is glorified JSON

Almost every data problem has relations of some form

![Untitled](How%20to%20choose%20one%20af910b1b697541e58861ec74af9ee19a/Untitled%201.png)

Example of MongoDb structure when it should have relations

Why it suck? Image that we have some king of reaction and we want to know his userID, we have to trigger another query back to the top in order to get them.

On the other side, with a relational Db we have the following diagram:

![Untitled](How%20to%20choose%20one%20af910b1b697541e58861ec74af9ee19a/Untitled%202.png)

## Functionalities

![Untitled](How%20to%20choose%20one%20af910b1b697541e58861ec74af9ee19a/Untitled%203.png)

The things that a K/V store do a Document Db can also do, a little bit slower by it also possible. The same thing can be applied to the things that a Document DB can do a Relational?SQL DB can also do.

For example we can replicate a Document db on a relacional db with a Table with a field as a jsonBlob

What did we learn were?

- Sql works great for most things
- There are real DX wins happening all over
- Pls reconsider Mongo
- Pls dont use Firestore
- Server/APIs are good, actually
