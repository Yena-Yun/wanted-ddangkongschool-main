import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    setText('타입스크립트');
  }, 2000);

  return (
    <div>
    </div>
  );
}
