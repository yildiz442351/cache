import React, { memo } from 'react';
import Button from "./Button"

const Button = ({ count, handleClick }) => {
  console.log('tekrar render oldu');

  return <div onClick={handleClick}>{count} sayısını arttır</div>;
};

// React.memo (memorization), react uygulamlarında
// performan optimazyonu sağlamak için kullanılır.
// Bu fonksiyon bir önceki render sonuçlarını hafızada tutar
// eğer bileşenin propları değişmediyse hafızada tutuğu
// önceki sonucu geri dödnürürek gereksiz hesaplamaları önler
export default memo(Button);

// ! önemli
// memo çalışma mantığı:
// bileşene bir önceki gönderdiğim propla en son gönderdiğim
// propları karşılaştırır eğerki proplar aynıysa bileşen zaten
// aynı olacğından bileşeni tekrar render etmez hafızdan getirir
// prop'lar farklıysa bielşende faklı olucağından tekrar render eder
// string,number,boolean gibi proplarda sorun çıkmasada
// function proplarında karşılaştırmada sorun yaşar

// Javascript nensneleri karşılaştırırken değerleri yerine
// referanslarını karşılaştırır. Eğerki iki nesnenin içeriği
// aynı olsa bile bu ensneler bellekte farklı noktaları
// işaret ediceği için karşıalştırma false döndürür
// console.log('ahmet' === 'ahmet');
// console.log(34 === 34);
// console.log(true === true);
// console.log({} === {});
// console.log([] === []);
// console.log(function yap() {} === function yap() {});