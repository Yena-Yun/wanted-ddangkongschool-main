import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트');

  setTimeout(() => {
    setText('타입스크립트');
  }, 2000);

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
        <button>버튼</button>
        <ul>
          <li>1</li>
          <li>4</li>
          <li>3</li>
          <li>3</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  );
}
