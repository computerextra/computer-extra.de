export default function QuoteBox({
  wer,
  quote,
}: {
  wer: string;
  quote: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl">
      <div className="grid grid-cols-4">
        <p className="col-span-3 font-thin">
          <em>{quote}</em>
        </p>
      </div>

      <span className="text-sm font-thin text-gray-400">- {wer}</span>
    </div>
  );
}
