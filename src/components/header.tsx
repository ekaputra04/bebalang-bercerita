export default function Header({ text }: { text: string }) {
  return (
    <h2 className="bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-300/80 dark:to-slate-900/10 mb-4 font-bold text-transparent text-xl md:text-2xl lg:text-3xl text-center">
      {text}
    </h2>
  );
}
