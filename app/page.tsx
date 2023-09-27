export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 m-20">
      <h1 className="text-3xl tracking-widest">the cave</h1>
      <p>September 29, 2023.</p>
      <hr className="w-3/5 h-px my-2 bg-black" />
      <h2 className="text-xl">To eat.</h2>
      <div className="w-2/5">
        <div className="my-3">
          <h3>AROUND THE WORLD IN 80 SLICES</h3>
          <p>otoro aguachile, sashimi, crudo</p>
        </div>
        <div className="my-3">
          <h3>OLD MACDONALD NO LONGER HAS A FARM</h3>
          <p>ragu, tagliatelle</p>
        </div>
        <div className="my-3">
          <h3>DESSERT</h3>
          <p>subsidized by Uber Eats and their generous investors</p>
        </div>
      </div>
      <h2 className="text-xl">To drink.</h2>
      <div className="w-2/5">
        <div className="my-3">
          <h3>MATCHA LATTE</h3>
          <p>handcrafted by Yoojin Han</p>
        </div>
        <div className="my-3">
          <h3>CHEONG SODA</h3>
          <p>
            (hesperidin, naringin, apigenin, chrysoeriol, diosmetin) aka lemon
          </p>
        </div>
        <div className="my-3">
          <h3>WATER</h3>
          <p>this guy john tells me that it&apos;s turned into wine</p>
        </div>
      </div>
      <h3>1,000,000 Terra Classic (LUNC)</h3>
    </div>
  );
}
