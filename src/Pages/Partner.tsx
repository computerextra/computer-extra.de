import { lazy, Suspense, useEffect, useState } from "react";
import ErrorAlert from "@/components/Error";
import Loading from "@/components/Loading";
import usePartner from "@/Hooks/usePartner";
import useTitle from "@/Hooks/useTitle";
import { LgWidth } from "@/Vars";

const PartnerCard = lazy(() => import("@/components/PartnerCard"));

export default function PartnerPage() {
  const { isPending, isError, Partner, error } = usePartner();
  const [minHeigt, setMinHeigt] = useState(0);
  useTitle("Partner");

  useEffect(() => {
    if (Partner == null) return;

    const w = window.screen.width;
    if (LgWidth < w) return;

    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setMinHeigt(height);
  }, [Partner]);

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <h1>Unsere Partner</h1>
      <h2 className="text-center">
        Wir pflegen eine partnerschaftliche Zusammenarbeit mit unseren Partnern.
        Auf Vertrauen und Transparenz legen wir großen Wert - denn im
        Miteinander liegt unsere Stärke.
      </h2>
      {isPending && <Loading message="Unsere Partner werden geladen..." />}
      {isError && (
        <ErrorAlert
          showRetry
          message={
            "Beim Laden der Partner ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
            error
          }
        />
      )}
      <Suspense
        fallback={<Loading message="Unsere Partner werden geladen..." />}
      >
        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-6">
          {Partner?.map((partner, idx) => (
            <PartnerCard key={partner.id} Partner={partner} id={idx} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
