import { lazy, Suspense, useEffect, useState } from "react";
import ErrorAlert from "@/components/Error";
import Loading from "@/components/Loading";
import { Skeleton } from "@/components/ui/skeleton";
import useAngebote from "@/Hooks/useAngebote";
import useTitle from "@/Hooks/useTitle";
import { LgWidth } from "@/Vars";

const AngebotCard = lazy(() => import("@/components/AngebotsCard"));

export default function AngeboteSeite() {
  const { isPending, isError, Angebote, error } = useAngebote();
  const [minHeigt, setMinHeigt] = useState(0);
  useTitle("Angebote");

  useEffect(() => {
    if (Angebote == null) return;

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
  }, [Angebote]);

  if (isPending)
    return (
      <div className="container mx-auto mt-10 mb-10 ">
        <h1 className="text-center">Unsere Angebote</h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center md:text-xl text-slate-900/90">
          Finden Sie das ideale Gerät für Ihre Anforderungen - Computer,
          Notebooks, Smartphones und Verträge zu unschlagbaren Konditionen!
        </p>
        {isPending && (
          <>
            <Loading message="Unsere Angebote werden geladen..." />
            <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-5 max-h-[1000px]">
              <SkeletonCard />
              <SkeletonCardBig />
              <SkeletonCardBig />
              <SkeletonCard />
            </div>
          </>
        )}
      </div>
    );

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <h1 className="text-center">Unsere Angebote</h1>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-center md:text-xl text-slate-900/90">
        Finden Sie das ideale Gerät für Ihre Anforderungen - Computer,
        Notebooks, Smartphones und Verträge zu unschlagbaren Konditionen!
      </p>

      {isError && (
        <ErrorAlert
          showRetry
          message={
            "Beim Laden der Angebote ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
            error
          }
        />
      )}

      <Suspense
        fallback={
          <>
            <Loading message="Unsere Angebote werden geladen..." />
            <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-5 max-h-[1000px]">
              <SkeletonCard />
              <SkeletonCardBig />
              <SkeletonCardBig />
              <SkeletonCard />
            </div>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-5 max-h-[1000px]">
          {Angebote?.map((Angebot, idx) => (
            <AngebotCard key={Angebot.id} Angebot={Angebot} idx={idx} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex flex-col row-span-1 space-y-3 lg:col-span-2">
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
}

function SkeletonCardBig() {
  return (
    <div className="flex flex-col row-span-1 space-y-3 lg:col-span-3">
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
}
