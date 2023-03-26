import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Main3D from "~/classes/Main3D";
import Test from "~/components/test";

const Home: NextPage = () => {
  const firstLoad = useRef(true)
  const [Main, setMain] = useState<Main3D>()
  const sla = new Test()
  sla.hidden = false

  useEffect(() => {
    if(!firstLoad.current) return
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement
    if(!canvas) return
    firstLoad.current = false
    setMain(new Main3D(canvas))
  })


  return (
    <>
      <canvas id="canvas" className="w-32 h-screen"/>
      <div className="absolute top-0 left-0 pointer-events-none w-screen h-screen overflow-hidden" id="container">
        {sla.element()}
      </div>
    </>
  );
};

export default Home;
