import React, { useState } from 'react';
import './task2.css';

function Task2 () {
  const [quote, setQuote] = useState('-');
  let quotesArr = [
    'Сомнение убивает, поэтому вы всегда должны точно знать, кто вы и за что боретесь',
    'Стремитесь не к успеху, а к ценностям, которые он дает',
    'Надо любить жизнь больше, чем смысл жизни',
    'Начинать всегда стоит с того, что сеет сомнения',
    '80% успеха - это появиться в нужном месте в нужное время',
    'Ваше время ограничено, не тратьте его, живя чужой жизнью',
    'Победа - это еще не все, все - это постоянное желание побеждать',
    'В моем словаре нет слова «невозможно»',
    'Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду',
    'Либо вы управляете вашим днем, либо день управляет вами',
    'Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы',
    'Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем',
    'Лучшая месть – огромный успех',
    'Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем',
    'Лучше быть уверенным в хорошем результате, чем надеяться на отличный',
    'Стоит только поверить, что вы можете – и вы уже на полпути к цели',
    'Научитесь говорить “Я не знаю”, и это уже будет прогресс',
    'У всего есть своя красота, но не каждый может ее увидеть',
    'Счастье – это не нечто готовое. Счастье зависит только от ваших действий',
    'Если нет ветра, беритесь за вёсла',
    'Если нет ветра, беритесь за вёсла',
    'Мы становимся тем, о чем мы думаем',
    'Я не жертва обстоятельств, я - результат моих решений',
    'Все дети - художники. Проблема в том, чтобы остаться художником, когда ты вырос',
  ]
  function clickBtn () {
    let quotes = quotesArr.length-1;
    setQuote(quotesArr[Math.floor(Math.random()*quotes)]);
  }
  return (
    <div className="wrapp">
      <button onClick={clickBtn}>Цитата дня</button>
      <p>{quote}</p>
    </div>
  )
}

export default Task2;