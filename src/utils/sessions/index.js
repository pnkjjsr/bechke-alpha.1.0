import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const login = (data) => {
    const cookies = parseCookies();
    setCookie(null, "uid", data.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });

    let localData = {
        displayName: data.displayName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        photoURL: data.photoURL,
    };

    localStorage.setItem("user", JSON.stringify(localData));
}

export const logout = () => {
    destroyCookie(null, "uid")
    localStorage.removeItem("user");
}