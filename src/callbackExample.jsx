import { useCallback, useState } from 'react';
import Button from './Button';


const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // usecallback amacı:
  // Fonksiyonların bellekte yeniden oluşmasının önüne geçer
  // bu sayade gereksiz render'ların önüne geçer.

  // React bileşenlerinde her render işlemi sırasında
  // yazıdğımız fonksiyonlar yeniden oluşturulur. Eğer yeniden
  // oluşturulan  bu fonksiyon farklı bir bileşen prop olarak
  // gönderiliyorsa bu bileşen farklı referansları
  // karşılaştırıcağından bileşen gereksiz yere tekrar render olur.

  // useCallback kullandığımızda eğerki bağmlılık dizisi
  // değişmediyse o zaman fonksiyonu bellekte yeniden oluşturmak
  // yerine daha önce oluşturdğumuz halini getirir. Bu sayede
  // gereksiz render'ların önüne geçmiş oluruz
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      sayaç: {count}
      <Button count={count} handleClick={handleClick} />
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default CallbackExample;