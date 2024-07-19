export default function LoadingSpinner() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin border-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 62 62"
          fill="none"
        >
          <g id="Group 1000003711">
            <circle
              id="Ellipse 717"
              cx="31.0018"
              cy="30.9993"
              r="26.5091"
              stroke="#D1D5DB"
              stroke-width="8"
              stroke-dasharray="5 5"
            />
            <path
              id="Ellipse 715"
              d="M38.7435 56.3529C45.0336 54.4317 50.3849 50.2409 53.7578 44.5947C57.1307 38.9484 58.2842 32.25 56.9942 25.8008C55.7043 19.3516 52.063 13.6122 46.7779 9.69765C41.4928 5.78314 34.9412 3.97307 28.396 4.61912"
              stroke="#4F46E5"
              stroke-width="8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
