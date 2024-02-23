import { useState, useMemo } from 'react';

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // sayaç her değiştiğinde maliyetli bir hesaplama yapalım
  // ! sorun: bu hesaplamyı bileşen her render olduğunda tekrar yapıyoruz
  // ? çözüm: useMemo kullanıp yaptığımız hesaplmanın sonucunu
  // ? cache'e atmak ve her render sırasında cache'deki
  // ? veriye erişmek bu şekilde gereksiz hesaplamaların önüne
  // ? geçebiliriz.
  // usememo eğerki bağımlılık dizisi değişmediyse daha önce yaptığı
  // hesaplamanın sonucunun hafızadan bize getirir.
  // bu sayede gereksiz hesaplamaların önüne geçmiş oluruz
  useMemo(() => {
    console.log('maliyetli hespalamya başlandı');
    // büyük bir dizi oluşturduk
    const dizi = new Array(1000000).fill('merhaba dünya');

    // maliyetli bir işlem yapacağız..
    dizi.forEach((item) => item + '!');

    return 'hafızada tutulacak olan veri';
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        sayacın değeri: {count}
      </button>

      <input type="text" onChange={(e) => setText(e.target.value)} />
      {text}
    </div>
  );
};

export default MemoExample;