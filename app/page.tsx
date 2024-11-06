"use client";

import { useEffect, useState } from "react";
import Input from "./components/Input";

export default function Home() {
  const [result, setResult] = useState<null | number>(null);
  const [panjangTali, setPanjangTali] = useState<null | number>(null);
  const [periodeAyunan, setPeriodeAyunan] = useState<null | number>(null);

  const tali = (newInput: string) => {
    setPanjangTali(Number.parseFloat(newInput));
  };

  const ayunan = (newInput: string) => {
    setPeriodeAyunan(Number.parseFloat(newInput));
  };

  useEffect(() => {
    if (panjangTali != null && periodeAyunan != null) {
      const calculation = (4 * Math.PI ** 2 * panjangTali) / periodeAyunan ** 2;
      setResult(calculation);
    }
  }, [panjangTali, periodeAyunan]);

  return (
    <div className="w-full h-screen">
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <Input id="tali" title="Panjang Tali (m)" onChange={tali} />
          <Input id="ayunan" title="Periode Ayunan (s)" onChange={ayunan} />

          <div>
            Kuat Medan Gravitasi :{" "}
            <b>
              {result != null && !Number.isNaN(result)
                ? `${result} m/s²`
                : "NaN"}
            </b>
          </div>
        </div>
        <div className="absolute mt-[40%]">
          Made by <strong>Youtwo_</strong>
        </div>
      </div>
    </div>
  );
}
