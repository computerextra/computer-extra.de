export default function QuoteBox({
  wer,
  quote,
}: {
  wer: string;
  quote: string;
}) {
  return (
    <div className="border rounded-xl p-4 shadow-lg hover:shadow-2xl hover:scale-105 hover:z-10 bg-white transition-all duration-300">
      <div className="grid grid-cols-4">
        <p className="col-span-3 font-thin">
          <em>{quote}</em>
        </p>
      </div>

      <span className="text-gray-400 text-sm font-thin">- {wer}</span>
    </div>
  );
}
