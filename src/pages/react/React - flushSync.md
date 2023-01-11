---
title: React - flushSync
description: React - flushSync
layout: ../../layouts/CodeDrops.astro
lang: en
---

```jsx
export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let socket = connect();

    function scrollToLastMessage() {
      // ...
    }

    socket.onMessage((message) => {
      flushSync(() => {
        setMessages((m) => [...m, message]);
      });
      scrollToLastMessage();
    });

    return () => {
      socket.disconnect();
    };
  }, []);
}
```
