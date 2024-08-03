import Link from 'next/link';

export default function Resume() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className="fixed inset-0 z-0">
    <img className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://media.giphy.com/media/26BRKEDGBicmow252/giphy.gif" alt="homegif" />
  </div> */}
  
  
    <h1 className="text-[20rem] font-bold">
      Resume!!
    </h1>
  
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <h2 className={`mb-3 text-5xl font-semibold`}>
    
    <div className="inline-block transition-transform group-hover:translate-x--6 motion-reduce:transform-none">
    download it{" "}
    </div>
  </h2>
  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>

  </p>
</Link>

  
  </main>
    );
  }