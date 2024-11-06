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

  const wAyunan = (newInput: string) => {
    const input = document.getElementById("ayunan") as HTMLInputElement;
    const newNumber = Number.parseFloat(newInput);
    setPeriodeAyunan(newNumber / 10);
    input.value = String(newNumber / 10);
  };

  const ayunan = (newInput: string) => {
    const input = document.getElementById("wAyunan") as HTMLInputElement;
    const newNumber = Number.parseFloat(newInput);
    setPeriodeAyunan(newNumber);
    input.value = String(newNumber * 10);
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
          <Input id="tali" title="Panjang Tali (cm)" onChange={tali} />
          <Input
            id="wAyunan"
            title="Waktu untuk 10 ayunan (s)"
            onChange={wAyunan}
          />
          <Input id="ayunan" title="Periode ayunan (s)" onChange={ayunan} />

          <div>Kuat Medan Gravitasi : </div>
          <div>
            <b>
              {result != null && !Number.isNaN(result)
                ? `${result} cm/s²`
                : "NaN"}
            </b>
            {result != null && !Number.isNaN(result) ? (
              <>
                <br />
                <b>{result / 100} m/s²</b>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="absolute mt-[70vh]">
          Made by <strong>Youtwo_</strong>
        </div>
      </div>
    </div>
  );
}
