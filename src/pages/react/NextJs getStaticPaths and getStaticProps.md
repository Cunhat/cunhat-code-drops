---
title: NextJs getStaticPaths and getStaticProps
description: NextJs getStaticPaths and getStaticProps
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
//[productRequestId].tsx

export async function getStaticPaths() {
  const products = Data.productRequests; //run your api to fetch your products

  const paths = products.map((product) => ({
    params: { productRequestId: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const commentInfo = Data.productRequests.find(
    (elem) => elem.id === parseInt(params.productRequestId),
  );
  return { props: { commentInfo } };
};
```

When we are using SSR we must fetch all the possible ids in order to Next know how many static pages must be generated.
