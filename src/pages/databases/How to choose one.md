---
title: How to choose a database
description: How to choose a database
layout: ../../layouts/CodeDrops.astro
lang: en
---

Theo’s video about Bd’s

<div class="embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cC6HFd1zcbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

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

![Untitled](/img/How%20to%20choose%20one/Untitled.png)

People who cares much People who don’t cares much

## Please don’t use Mongo (unless you have a very specific reason)

Mongo is a DOCUMENT store, It is glorified JSON

Almost every data problem has relations of some form

![Untitled](/img/How%20to%20choose%20one/Untitled%201.png)

Example of MongoDb structure when it should have relations

Why it suck? Image that we have some king of reaction and we want to know his userID, we have to trigger another query back to the top in order to get them.

On the other side, with a relational Db we have the following diagram:

![Untitled](/img/How%20to%20choose%20one/Untitled%202.png)

## Functionalities

![Untitled](/img/How%20to%20choose%20one/Untitled%203.png)

The things that a K/V store do a Document Db can also do, a little bit slower by it also possible. The same thing can be applied to the things that a Document DB can do a Relational?SQL DB can also do.

For example we can replicate a Document db on a relacional db with a Table with a field as a jsonBlob

What did we learn were?

- Sql works great for most things
- There are real DX wins happening all over
- Pls reconsider Mongo
- Pls dont use Firestore
- Server/APIs are good, actually
