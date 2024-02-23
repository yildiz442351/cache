import {useState , useMemo} from 'react';

const MemoExample = () => {
  const [count, setCount] = useState (0);
  const [text, setText] = useState ("");

  //sayaç her değiştiğinde maliyetli bir hesaplama yapalım
  // ! sorun: bu hesaplamayı bileşen her render olduğunda tekrar yapıyoruz
  //? çözüm: useMemo kullanıp yaptığımız hesaplamanın sonucunu 
  //? cache 'e atmak ve her render sırasında cache'deki veriye erişmek 
  //? bu şekilde gereksiz hesaplamanın önüne geçebiliriz
  //usememo eğer ki bağımlılık dizisi değişmediyse daha önce yaptığı
  //hesaplamanın sonucunu hafızadan bize getirir
  //bu sayede gereksiz hesaplamaların önüne geçmiş oluruz
  useMemo(() => {
  const hesapla = () => {
    //büyük bir dizi oluşturduk 
    const dizi = new Array(100000).fill('merhaba dünya');

    //maliyetli bir işlem yapıcaz..
    dizi.forEach((item) => item + '!');
    return  "hafızada tutulacak olan veri" dizi;

  } , [count]);

   //fonksiyonu çağırma
   hesapla();

  return (
    <div>
      <button onClick={() => setCount(count +1)}>
        sayacın değeri: {count}
      </button>

      <input type='text' onChange={(e) => setText(e.target.value)} />
    </div>
  )
};

export default App;