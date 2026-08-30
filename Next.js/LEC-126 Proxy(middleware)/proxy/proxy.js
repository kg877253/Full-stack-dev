// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }


// import { NextResponse } from 'next/server'
 
// export function proxy(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/dashboard/user', request.url))
//   }
//   if( request.nextUrl.pathname.startsWith('/home')) {
//     return NextResponse.rewrite(new URL('/home', request.url))
//   }
// }


import { NextResponse } from 'next/server'
 
export function proxy(request) {
  // Clone the request headers and set a new header `x-hello-from-proxy1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-proxy1', 'hello')
 
  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  // Set a new response header `x-hello-from-proxy2`
  response.headers.set('x-hello-from-proxy2', 'hello')
  return response
}