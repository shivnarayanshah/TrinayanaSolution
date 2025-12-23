import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isPublicRoute = ["/", "/about", "/contact", "/login", "/register", "/civil", "/it"].includes(nextUrl.pathname);
    const isAdminRoute = nextUrl.pathname.startsWith("/admin");

    if (isApiAuthRoute) return null;

    if (isAdminRoute) {
        if (!isLoggedIn) {
            return Response.redirect(new URL("/login", nextUrl));
        }
        if (req.auth.user.role !== "ADMIN") {
            return Response.redirect(new URL("/", nextUrl));
        }
    }

    if (isLoggedIn && (nextUrl.pathname === "/login" || nextUrl.pathname === "/register")) {
        return Response.redirect(new URL("/admin/dashboard", nextUrl));
    }

    return null;
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
