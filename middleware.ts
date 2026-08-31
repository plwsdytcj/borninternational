import { type NextRequest, NextResponse } from "next/server"

const PRIMARY_HOST = "www.bornpe.com"
const LEGACY_HOSTS = new Set([
  "bornpe.com",
  "borninternational.com",
  "www.borninternational.com",
])

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")
  const requestHost = forwardedHost ?? request.headers.get("host") ?? ""
  const host = requestHost.split(":")[0].toLowerCase()

  if (LEGACY_HOSTS.has(host)) {
    const destination = request.nextUrl.clone()
    destination.protocol = "https:"
    destination.host = PRIMARY_HOST
    destination.port = ""

    return NextResponse.redirect(destination, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
}
