## Introduction
#### Implement a single data graph across multiple services

To get the most out of GraphQL, your organization should expose a single data graph that provides a unified interface for querying any combination of your backing data sources. However, it can be challenging to represent an enterprise-scale data graph with a single, monolithic GraphQL server.

To remedy this, you can divide your graph's implementation across multiple composable services with Apollo Federation:

#### To quote the Apollo docs, Federation is designed with these core principles:

* Building a graph should be declarative. With federation, you compose a graph declaratively from within your schema instead of writing imperative schema stitching code.
* Code should be separated by concern, not by types. Often no single team controls every aspect of an important type like a User or Product, so the definition of these types should be distributed across teams and codebases, rather than centralized.
* The graph should be simple for clients to consume. Together, federated services can form a complete, product-focused graph that accurately reflects how it’s being consumed on the client.
* It’s just GraphQL, using only spec-compliant features of the language. Any language, not just JavaScript, can implement federation.

Link to Integrity Principles: https://principledgraphql.com/integrity#2-federated-implementation
