import { useQuery } from "@tanstack/react-query"
import { type Abteilung, fetchAbteilungen, fetchMitarbeiter, type Mitarbeiter, } from "@/lib/apiClient.ts"
import { Button } from "@/components/ui/button.tsx"
import { useState } from "react"
import { Badge } from "@/components/ui/badge.tsx"
import { Card, CardContent } from "@/components/ui/card.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx"
import { Mail } from "lucide-react"

const Team = () => {
  const Mitarbeiter = useQuery({
    queryKey: ["Mitarbeiter"],
    queryFn: async () => {
      const res = await fetchMitarbeiter()
      return res?.data ?? null
    },
    staleTime: 5 * 1000,
  })
  const Abteilungen = useQuery({
    queryKey: ["Abteilungen"],
    queryFn: async () => {
      const res = await fetchAbteilungen()
      return res?.data ?? null
    },
    staleTime: 5 * 1000,
  })

  const [selectedDepartment, setSelectedDepartment] =
    useState<Abteilung | null>(null)

  const filteredEmployees = Mitarbeiter.data?.filter((employee) => {
    return (
      selectedDepartment == null ||
      employee.abteilungId === selectedDepartment.id
    )
  })

  const groupedEmployees = Abteilungen.data?.reduce(
    (acc, dept) => {
      if (dept == null) return acc
      if (filteredEmployees == null) return acc
      acc[dept.name] = filteredEmployees.filter(
        (emp) => emp.abteilungId === dept.id
      )
      return acc
    },
    {} as Record<string, Mitarbeiter[]>
  )

  return (
    <div className={"container mx-auto mt-5"}>
      <title>Computer Extra GmbH | Team</title>
      {Mitarbeiter && Abteilungen && (
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
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
                  {Mitarbeiter.data?.length}
                </Badge>
              </Button>
              {Abteilungen.data?.map((dept) => (
                <Button
                  key={dept.id}
                  variant={selectedDepartment === dept ? "default" : "outline"}
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
                      Mitarbeiter.data?.filter(
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
                      <div className="mb-6 flex items-center gap-3">
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
                        {deptEmployees.map((employee) => {
                          return (
                            <EmployeeCard
                              key={employee.id}
                              employee={employee}
                              dep={Abteilungen.data?.find(
                                (x) => x.id === employee.abteilungId
                              )}
                            />
                          )
                        })}
                      </div>
                    </section>
                  )
              )}
            </div>
          ) : (
            // Show selected department
            <div>
              <div className="mb-6 flex items-center gap-3">
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
                    dep={Abteilungen.data?.find(
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
    </div>
  )
}

function EmployeeCard({
  employee,
  dep,
}: {
  employee: Mitarbeiter
  dep: Abteilung | undefined
}) {
  const email = employee.name.split(" ").join(".") + " [AT] computer-extra.de"
  return (
    <Card className="group border-border bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Avatar className="h-20 w-20">
            <AvatarImage
              // TODO: Bild über API ziehen
              src={
                employee.image
                  ? `https://bilder.computer-extra.de/data/Mitarbeiter/${employee.short.toLowerCase()}.webp`
                  : ""
              }
              className="transition-transform duration-300 group-hover:scale-120"
              alt={employee.name}
            />
            <AvatarFallback className="bg-secondary text-lg font-semibold text-secondary-foreground transition-transform duration-300 group-hover:scale-120">
              {employee.short}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-balance text-card-foreground">
              {employee.name}
            </h3>

            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>

            <Badge
              variant="outline"
              className="border-accent/20 bg-foreground text-accent"
            >
              {dep?.name}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Team
