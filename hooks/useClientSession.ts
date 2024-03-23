export default function useClientSession() {
  const cookies = document.cookie.split(";");
  const cookieMap: Record<string, any> = {};
  cookies.forEach((val) => {
    const cookie = val.split("=");
    cookieMap[cookie.at(0) as string] = cookie.at(1);
  });
  return JSON.parse(atob(decodeURIComponent(cookieMap["auth_state"])));
}
