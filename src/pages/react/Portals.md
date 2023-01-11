---
title: Portals
description: Portals
layout: ../../layouts/CodeDrops.astro
lang: en
---

**Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.**

In react, portals allow us to render something outside off the main react div

Is a good choice when we want to implement modals, etc

```jsx
<div id='portal'></div>;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='portal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

```jsx
export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  id,
}) => {
  const [mount, setMount] = useState < boolean > false;

  const modalContent = open ? (
    <>
      <Overlay />
      <ModalContainer>{children}</ModalContainer>
    </>
  ) : null;

  React.useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return mount
    ? ReactDom.createPortal(modalContent, document.querySelector('#portal'))
    : null;
};
```

In simple words, we have to create a div with an specific id and on our component we’ve use the ReactDom.createPortal function and a selector to that specific div id
