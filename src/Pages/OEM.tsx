import { Button } from "@/components/ui/button"

const Oem = () => {
  return (
    <div className="container mx-auto mt-5">
      <title>Computer Extra GmbH | OEM</title>
      <section className="flex justify-center">
        <Button size="xl" asChild>
          <a href="https://api.computer-extra.de/oem-logo/OEMLogo.zip">
            Download Logo
          </a>
        </Button>
      </section>
    </div>
  )
}

export default Oem
