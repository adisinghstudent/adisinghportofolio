import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="border border-gray-300 sm:border-none flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="fixed inset-0 z-0">
  <img className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://media.giphy.com/media/26BRKEDGBicmow252/giphy.gif" alt="homegif" />
</div> */}

<div className="relative z-10 flex justify-center transform translate-y-32 h-screen">
  <h1 className="text-[20rem] font-bold">
    Adi Singh
  </h1>
</div>




<div className="relative flex place-items-center z-10">
  <h1 className={`mb-14 text-6xl font-bold`}>
    software developer
  </h1>
</div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      



      <Link href="/projects" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <h2 className={`mb-3 text-5xl font-semibold`}>
    
    <div className="inline-block transition-transform group-hover:translate-x-6 motion-reduce:transform-none">
    Projects{" "}
    </div>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
    take a look at what ive been building.
  </p>
</Link>


<Link href="/resume" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <h2 className={`mb-3 text-5xl font-semibold`}>
    
    <div className="inline-block transition-transform group-hover:translate-x-6 motion-reduce:transform-none">
    Resume{" "}
    </div>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
    just read the pdf.
  </p>
</Link>

        
      <Link href="/projects" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <h2 className={`mb-3 text-5xl font-semibold`}>
    
    <div className="inline-block transition-transform group-hover:translate-x-6 motion-reduce:transform-none">
    Projects{" "}
    </div>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50 mb-10`}>
    Find in-depth information about Next.js features and API.
  </p>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50 mb-10`}>
    Find in-depth information about Next.js features and API.
  </p>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50 mb-10`}>
    Find in-depth information about Next.js features and API.
  </p>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50 mb-10`}>
    Find in-depth information about Next.js features and API.
  </p>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50 mb-10`}>
    Find in-depth information about Next.js features and API.
  </p>
</Link>

        
      </div>
      <div className="z-10 mb-14 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/adisinghstudent?tab=stars"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/githubb.png"
              alt="Github"
              className="dark:invert"
              width={45}
              height={24}
              priority
            />
          </a>
        </div>

        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={37}
          priority
        />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://linkedin.com/in/adisinghwork"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/linkedin.png"
              alt="Linkedin"
              className="dark:invert"
              width={45}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
         
    </main>
  );
}
