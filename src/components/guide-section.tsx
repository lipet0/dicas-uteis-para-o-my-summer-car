import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"

interface GuideSectionProps {
  id: string
  title: string
  children: ReactNode
  imageSrc?: string
  imageAlt?: string
}

export function GuideSection({ id, title, children, imageSrc, imageAlt }: GuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <Card className="mb-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-lg max-w-none text-foreground">
            {children}
          </div>
          {imageSrc && (
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}