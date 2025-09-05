import type { Abteilung } from "@/api/abteilungen";
import type { Mitarbeiter } from "@/api/mitarbeiter";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useAbteilungen from "@/Hooks/useAbteilungen";
import useMitarbeiter from "@/Hooks/useMitarbeiter";
import { LgWidth } from "@/Vars";
import { lazy, Suspense, useEffect, useState } from "react";

const EmployeeCard = lazy(() => import("@/components/TeamCard"));

export default function TeamPage() {
  const {
    isPending: maPending,
    isError: maIsError,
    Mitarbeiter,
    error: maError,
  } = useMitarbeiter();
  const { isPending, isError, Abteilungen, error } = useAbteilungen();
  const [minHeigt, setMinHeigt] = useState(0);

  useEffect(() => {
    if (Abteilungen == null) return;

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
  }, [Abteilungen]);

  const [selectedDepartment, setSelectedDepartment] =
    useState<Abteilung | null>(null);

  const filteredEmployees = Mitarbeiter?.filter((employee) => {
    const matchesDepartment =
      selectedDepartment == null ||
      employee.abteilungId === selectedDepartment.id;
    return matchesDepartment;
  });

  const groupedEmployees = Abteilungen?.reduce((acc, dept) => {
    if (dept == null) return acc;
    if (filteredEmployees == null) return acc;
    acc[dept.name] = filteredEmployees.filter(
      (emp) => emp.abteilungId === dept.id
    );
    return acc;
  }, {} as Record<string, Mitarbeiter[]>);

  return (
    <div className="container mx-auto mt-10" style={{ minHeight: minHeigt }}>
      <h1>Team</h1>
      <h2 className="text-center">
        Wir schaffen ein flexibles Angebot für unsere Kunden - transparent,
        kreativ, persönlich.
      </h2>
      {(maPending || isPending) && (
        <Loading message="Unser Team wird geladen..." />
      )}
      {maIsError && (
        <Error
          showRetry
          message={
            "Beim Laden der Mitarbeiter ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
            maError
          }
        />
      )}
      {isError && (
        <Error
          showRetry
          message={
            "Beim Laden der Abteilungen ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut. Fehler: " +
            error
          }
        />
      )}
      <Suspense>
        {Mitarbeiter && Abteilungen && (
          <div className="container px-4 py-8 mx-auto">
            {/* Search and Filter */}
            <div className="flex flex-col gap-4 mb-8 sm:flex-row">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedDepartment == null ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(null)}
                  className={
                    selectedDepartment === null
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  Alle
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-secondary text-secondary-foreground"
                  >
                    {Mitarbeiter?.length}
                  </Badge>
                </Button>
                {Abteilungen?.map((dept) => (
                  <Button
                    key={dept.id}
                    variant={
                      selectedDepartment === dept ? "default" : "outline"
                    }
                    onClick={() => setSelectedDepartment(dept)}
                    className={
                      selectedDepartment === dept
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {dept.name}

                    <Badge
                      variant="secondary"
                      className="ml-2 bg-secondary text-secondary-foreground"
                    >
                      {
                        Mitarbeiter?.filter(
                          (emp) => emp.abteilungId === dept.id
                        ).length
                      }
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Team Display */}
            {selectedDepartment == null ? (
              // Show all departments
              <div className="space-y-12">
                {Object.entries(groupedEmployees ?? {}).map(
                  ([dept, deptEmployees]) =>
                    deptEmployees.length > 0 && (
                      <section key={dept}>
                        <div className="flex items-center gap-3 mb-6">
                          <h2 className="text-2xl font-semibold text-foreground">
                            {dept}
                          </h2>
                          <Badge
                            variant="outline"
                            className="bg-secondary text-secondary-foreground"
                          >
                            {deptEmployees.length} Mitarbeiter
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {deptEmployees.map((employee) => (
                            <EmployeeCard
                              key={employee.id}
                              employee={employee}
                              dep={Abteilungen?.find(
                                (x) => x.id === employee.abteilungId
                              )}
                            />
                          ))}
                        </div>
                      </section>
                    )
                )}
              </div>
            ) : (
              // Show selected department
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {selectedDepartment.name}
                  </h2>
                  <Badge
                    variant="outline"
                    className="bg-secondary text-secondary-foreground"
                  >
                    {filteredEmployees?.length} Mitarbeiter
                  </Badge>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredEmployees?.map((employee) => (
                    <EmployeeCard
                      key={employee.id}
                      employee={employee}
                      dep={Abteilungen?.find(
                        (x) => x.id === employee.abteilungId
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {filteredEmployees?.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">
                  No employees found matching your criteria.
                </p>
              </div>
            )}
          </div>
        )}
      </Suspense>
    </div>
  );
}
