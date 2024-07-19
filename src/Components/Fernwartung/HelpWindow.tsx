import MacHelp from "./MacHelp";
import WindowsHelp from "./WindowsHelp";

export default function HelpWindow() {
  const disabled =
    (!navigator.userAgent.includes("Windows") &&
      !navigator.userAgent.includes("Mac")) ||
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad");
  if (disabled) {
    return (
      <p className="py-1 font-semibold border rounded-lg border-red-600 text-center">
        Ihr Betriebssystem wird aktuell noch nicht Unterstützt. Wir können Ihnen
        Leider keine Fernwartung anbieten.
      </p>
    );
  }
  if (navigator.userAgent.includes("Windows")) {
    return <WindowsHelp />;
  }
  if (navigator.userAgent.includes("Mac")) {
    return <MacHelp />;
  }
  return (
    <p className="py-1 font-semibold border rounded-lg border-red-600 text-center">
      Ihr Betriebssystem wird aktuell noch nicht Unterstützt. Wir können Ihnen
      Leider keine Fernwartung anbieten.
    </p>
  );
}
